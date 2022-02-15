import React from "react";
import InfoTags from '../infoTags/InfoTags';
import styles from "../../styles/Card.module.css";

const CardContainer_DOWN = (props) => {

  let price = 'AU$100,000,000';
  let agentName = 'Hocking Fucking Stuart Real Estate';
  let saleType = 'Private Sale';

  return (
    <div className={styles.CardContainer_DOWN}>
      <div>
        <InfoTags message={price}/>
      </div>

      <div>
        <InfoTags message={agentName}/>
        <InfoTags message={saleType}/>
      </div>
    </div>
  );
};

export default CardContainer_DOWN;
