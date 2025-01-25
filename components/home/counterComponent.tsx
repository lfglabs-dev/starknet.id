import React, { useEffect, useState } from 'react';
import styles from "../../styles/components/titles.module.css";

const Counter: React.FC = () => {
 const [count, setCount] = useState(0);
 
 useEffect(() => {
   const end = 475736;
   const duration = 5000;
   const range = end;
   const step = Math.floor(duration / range);
   
   const startTime = Date.now();
   
   const timer = setInterval(() => {
     const elapsed = Date.now() - startTime;
     
     if (elapsed >= duration) {
       setCount(end);
       clearInterval(timer);
       return;
     }
     
     const progress = elapsed / duration;
     const nextCount = Math.min(Math.ceil(range * progress), end);
     
     setCount(nextCount);
   }, step);
   
   return () => clearInterval(timer);
 }, []);
 
 return <h2 id='count' className={styles.domainCountTitle}>{count.toLocaleString()}</h2>;
};

export default Counter;
