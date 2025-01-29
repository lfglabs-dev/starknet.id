import React, { useEffect, useRef, useState } from 'react';
import styles from "../../styles/components/titles.module.css";
import { ICounter } from '../../types/frontTypes';

const Counter: React.FC<ICounter> = ({finalValue}) => {
 const [count, setCount] = useState(0);
 const [hasStarted, setHasStarted] = useState(false);
 const ref = useRef<HTMLHeadingElement | null>(null);

 useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasStarted) {
        setHasStarted(true);
      }
    },
    { threshold: 0.5 } 
  );

  if (ref.current) observer.observe(ref.current);

  return () => observer.disconnect();
}, [hasStarted]);


useEffect(() => {
 if (!hasStarted) return;
 
   const end = finalValue;
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
 }, [hasStarted]);
 
 return <h2 ref={ref} id='count' className={styles.domainCountTitle}>{count.toLocaleString()}</h2>;
};

export default Counter;
