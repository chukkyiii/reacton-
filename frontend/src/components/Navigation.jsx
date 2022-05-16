import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Navigation.module.css'

export default function Navigation() {
    const menu = [
        {title: 'Home', path: '/'},
    ]

    const location = useLocation()
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.loading_bar}></div>
                <h1 className={styles.title_style}>Reacton<span className={styles.highlight}>.tech</span> </h1>
                <header className={styles.nav_container}>
                    <nav className={styles.nav_block}>
                        <ul className={styles.nav_links}>
                            {menu.map((item, index) => {
                                return (
                                <li key={index}>
                                    <NavLink to={item.path}
                                            className = {
                                                location.pathname === item.path 
                                                ? styles.active
                                                : styles.non_active
                                            }>
                                        {item.title}
                                    </NavLink>
                                </li>
                                )
                            })}
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    )
}
