import React from 'react'
import classNames from './Footer.module.css'

function Footer() {
    const moonLanding = new Date('May 25, 21 16:08:50');
    return (
        <footer className = {classNames.footerColor}>
            <div className = {classNames.graph}>
                <div className = {classNames.test}></div>
                <button className = {classNames.contactButton}>Nous contacter</button>
            </div>
            <div className = {classNames.underline}></div>
            <div className = {classNames.menuContainer}>
                <ul className = {classNames.menu}>
                    <li > &copy;Thefeel - </li>
                    <li> {moonLanding.getFullYear()} - </li>
                    <li> Tous droits réservés - Mainmouna Sakho</li>
                </ul>
            </div>
           
        </footer>
    )
}

export default Footer
