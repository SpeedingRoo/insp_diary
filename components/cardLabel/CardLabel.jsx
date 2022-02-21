import React from 'react';
import styles from '../../styles/Card.module.css';

const CardLabel = (props)=>{
            return(
                <div className={styles.CardLabel}>
                    {props.content}
                </div>
            )
}

export default CardLabel;