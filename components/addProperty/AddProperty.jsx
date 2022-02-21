import React from "react";
import styles from "../../styles/Dialogue.module.css";

const AddProperty = (props) => {

  return (
    <div className={styles.AddProperty}>
      <section className={styles.dialogueCard}>
        <div>Add New Property</div>
        <label>
          OFI Date
          <input
            type="date"
            id="inspection_date"
            name="inspection on"
            min="2000-01-01"
            max="2023-01-01"
            required
          />
        </label>
        <label>
          Property Address
          <input type="text" />
        </label>
        <label>
          Property Suburb
          <input type="text" />
        </label>
        <label>
          Property Postcode
          <input type="text" />
        </label>
        <label>
          Agent
          <input type="text" />
        </label>
        <label>
          Sale Type
          <input type="text" />
        </label>
        <div className={styles.buttonArea}>
          <button onClick={props.closeModal} >cancel</button>
          <button >confirm</button>
        </div>
      </section>
    </div>
  );
};

export default AddProperty;
