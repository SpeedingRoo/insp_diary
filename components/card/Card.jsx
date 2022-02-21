import React from "react";
import Button from '../button/Button';
import CardLabel from "../cardLabel/CardLabel";
import CardContainer_UP from "../cardContainer_UP/CardContainer_UP";
import CardContainer_DOWN from "../cardContainer_DOWN/CardContainer_DOWN";
import styles from "../../styles/Card.module.css";

const Card = (props) => {

  const info = props.info;
  return (
    <div className={styles.Card}>
      <CardLabel content={info.date} />
      <CardContainer_UP content={info}/>
      <CardContainer_DOWN content={info}/>
      <div className={styles.button_section}>
        <Button buttonType="Add" onAdd={props.onAdd}/>
        <Button buttonType="Remove" onRemove={props.removeCard} info={props.info}/>
      </div>
    </div>
  );
};

export default Card;
