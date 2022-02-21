import React from "react";
import styles from "../../styles/Card.module.css";

const Button = (props) => {
  if (props.buttonType === "Add") {
    return (
      <button className={styles.Button_Add} onClick={props.onAdd}>
        {props.buttonType}
      </button>
    );
  } else if (props.buttonType === "Remove") {
    return (
      <button className={styles.Button_Remove} onClick={()=>{props.onRemove(props.info)}}>
        {props.buttonType}
      </button>
    );
  }
};

export default Button;
