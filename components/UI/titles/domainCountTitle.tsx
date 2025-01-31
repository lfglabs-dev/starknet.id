import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from "react";
import styles from "../../../styles/components/titles.module.css";
import Counter from "../../home/counterComponent";

type CategoryTitleProps = {
  subtitle: string;
  button: ReactNode;
};

const DomainCountTitle: FunctionComponent<CategoryTitleProps> = ({
  subtitle,
  button,
}) => {
  const [domainCount, setDomainCount] = useState(1356000);
  useEffect(() => {
    const fetchDomainCount = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_LINK}/stats/count_minted_domains`
        );
        if (response.ok) {
          const data = await response.json();
          setDomainCount(data.count);
        }
      } catch (error) {
        console.error("Failed to fetch domain count:", error);
      }
    };

    fetchDomainCount();
  }, []);
  return (
    <div className={styles.domainCountTitleContainer}>
      <Counter finalValue={domainCount} />
      <p className={styles.domainCountSubtitle}>{subtitle}</p>
      {button}
    </div>
  );
};

export default DomainCountTitle;
