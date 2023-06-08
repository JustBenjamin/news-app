import React, { useState } from 'react';
import styles from '../css/Header.module.css';
import open from '../images/icon-menu.svg';
import close from '../images/icon-menu-close.svg';
import logo from '../images/logo.svg';



export default function Header() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }



    return (
        <div className={styles.header}>
            <img src={logo} alt="logo" className={styles.logos}/>

            <div className={styles.nav}>
                {/* hamburger icon */}
            <div className={styles.toggle} onClick={toggleMenu}>
                <img src={open} alt="hamburger menu"  className={isMenuOpen ? styles.close: styles.open } />
                <img src={close} alt="hamburger menu" className={isMenuOpen ? styles.open: styles.close}/>
            </div>
                <ul className={isMenuOpen ? styles.listopen: styles.listclose}>
                    <li className={styles.item}>Home</li>
                    <li className={styles.item}>New</li>
                    <li className={styles.item}>Popular</li>
                    <li className={styles.item}>Trending</li>
                    <li className={styles.item}>Categories</li>
                </ul>
            </div>
        
        </div>
    )
}