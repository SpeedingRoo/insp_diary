import React from "react";
import styles from "../../styles/Card.module.css";
import InfoTags from "../infoTags/InfoTags";

const CardContainer_UP = (props) => {
    let entryOne = props.content.address;
    let entryTwo = props.content.suburb + ' , ' + props.content.postcode;
  return (
    <div className={styles.CardContainer_UP}>
      <InfoTags message={entryOne} />
      <InfoTags message={entryTwo} />
    </div>
  );
};

export default CardContainer_UP;
