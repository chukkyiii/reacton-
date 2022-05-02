import React from 'react'
import styles from './Reactbox.module.css'

export default function Reactbox() {

    return (
        <div>
            <div className={styles.test_container}>
                <button> {/* react box */}</button>
                <div>{/* test bars */}</div>
            </div>
        </div>
    )
}

// TODO: auto build on change