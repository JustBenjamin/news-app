import React from 'react';
import styles from '../css/Posts.module.css'

export default function Posts() {
    return (
        <div className={styles.posts}>

            <div className={styles.postscontainer}>

                <div className={styles.card}>
                    <div className={styles.pc}></div>

                    <div className={styles.excerpt}>
                        <h2 className={styles.h2}>01</h2>
                            <h3>Reviving Retro PCs</h3>
                            <p className={styles.p}>What happens when old PCs are given modern upgrades?</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.laptop}></div>

                    <div className={styles.excerpt}>
                        <h2 className={styles.h2}>02</h2>
                            <h3>Top 10 Laptops of 2022</h3>
                            <p className={styles.p}>Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                
                <div className={styles.card}>
                    <div className={styles.game}></div>

                    <div className={styles.excerpt}>
                        <h2 className={styles.h2}>03</h2>
                            <h3>Reviving Retro PCs</h3>
                            <p className={styles.p}>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                 </div>


            </div>
            

            
        </div>
    )
}