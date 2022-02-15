import React from "react";
import styles from "../../styles/Card.module.css";

const Button = (props) => {
  if (props.buttonType === "Add") {
    return (
      <button className={styles.Button_Add}>{props.buttonType}</button>
    );
  } else if ((props.buttonType === "Remove")) {
    return (
      <button className={styles.Button_Remove}>{props.buttonType}</button>
    );
  }
};

export default Button;
