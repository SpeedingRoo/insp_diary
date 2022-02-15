import React from 'react';
import styles from '../../styles/Card.module.css';

const InfoTags = (props)=>{
    return(
        <div className={styles.InfoTags}>
            {props.message}
        </div>
    )
}

export default InfoTags;
