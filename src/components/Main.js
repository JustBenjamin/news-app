import React from 'react';
import Section from './Section';
import Side from './Side';
import Posts from './Posts';
import styles from '../css/Main.module.css';



export default function Main() {

    return (
        <div className={styles.main}>
            <Section/>
            <Side />
            <Posts />

        </div>
    )
}