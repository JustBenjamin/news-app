import React from 'react';
import styles from '../css/Side.module.css';


export default function Side() {
    return (
        <div  className={styles.side}>
            <h2 className={styles.h2}>New</h2>

            <div className={styles.newposts}>
            <div className={styles.headline}>
                <h3>Hydrogen VS Electric Cars</h3>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>

            <div className={styles.headline}>
                <h3>The Downsides of AI Artistry</h3>
                <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>

            <div>
                <h3>Is VC Funding Drying Up?</h3>
                <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>


            </div>
            
            
        </div>
    )
}