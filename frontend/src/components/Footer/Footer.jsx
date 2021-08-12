import React from 'react'
import classNames from './Footer.module.css'

function Footer() {
    const moonLanding = new Date('May 25, 21 16:08:50');
    return (
        <footer className = {classNames.menuContainer}>
                <ul className = {classNames.menu}>
                    <li > &copy;Thefeel - </li>
                    <li> {moonLanding.getFullYear()} - </li>
                    <li> Tous droits réservés - Mainmouna Sakho</li>
                </ul>
        </footer>
    )
}

export default Footer
