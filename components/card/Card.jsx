import React from "react";
import Button from '../button/Button';
import CardLabel from "../cardLabel/CardLabel";
import CardContainer_UP from "../cardContainer_UP/CardContainer_UP";
import CardContainer_DOWN from "../cardContainer_DOWN/CardContainer_DOWN";
import styles from "../../styles/Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.Card}>
      <CardLabel />
      <CardContainer_UP />
      <CardContainer_DOWN />
      <div className={styles.button_section}>
        <Button buttonType="Add" />
        <Button buttonType="Remove" />
      </div>
    </div>
  );
};

export default Card;
