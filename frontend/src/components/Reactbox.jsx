import React from 'react'
import styles from './Reactbox.module.css'

export default function Reactbox() {
    // setup the state
    
    return (
        <div>
            <div className={styles.test_container}>
                <button className={styles.reac_container}> {/* react box */}</button>
                <div className={styles.test_bar}>
                    <div className={styles.bar_item}>
                        {/* previous timer */}
                    </div>
                    <div className={styles.bar_item}>
                        {/* current timer */}
                    </div>
                    <button className={styles.reset_button}>
                        {/* reset button and start button */}
                    </button>
                </div>
            </div>
        </div>
    )
}

// TODO: auto build on change