import React from 'react';
import styles from '../css/Section.module.css';


export default function Section() {
    return (
        <div className={styles.section}>
            
            <div className={styles.hero}>
            </div>

            <div className={styles.feature}>
                <h1 className={styles.headline}>The Bright Future of Web 3.0?</h1>

                <div className={styles.subtext}>
                    <p className={styles.p}>We dive into the next evolution of the web that claims to put 
                    the power of the platforms back into the hands of the people. 
                    But is it really fulfilling its promise?</p>

                    <button>Read More</button>

                </div>
               
                </div>
                
        </div>
    )
}