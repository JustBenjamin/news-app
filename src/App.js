import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import styles from './css/App.module.css'

export default function App() {
    return (
        <div className={styles}>
            <Header />
            <Main />
        </div>
    )
}