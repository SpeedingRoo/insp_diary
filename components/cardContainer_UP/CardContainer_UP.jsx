import React from "react";
import styles from "../../styles/Card.module.css";
import InfoTags from "../infoTags/InfoTags";

const CardContainer_UP = (props) => {
    let entryOne = 'Unit 1, Number 2 The Very Luxurious Street';
    let entryTwo = 'Expensive, 8888';
  return (
    <div className={styles.CardContainer_UP}>
      <InfoTags message={entryOne} />
      <InfoTags message={entryTwo} />
    </div>
  );
};

export default CardContainer_UP;
