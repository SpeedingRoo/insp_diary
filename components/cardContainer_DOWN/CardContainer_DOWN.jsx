import React from "react";
import InfoTags from '../infoTags/InfoTags';
import styles from "../../styles/Card.module.css";

const CardContainer_DOWN = (props) => {

  let content = props.content;

  let price = `AU$`+ content.price;
  let agentName = content.agent;
  let saleType = content.sale_type;

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
