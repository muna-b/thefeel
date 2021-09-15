import React, {useState} from 'react'
import classNames from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    }
    return (
        <div className = {classNames.App}>
        <header className ={ classNames.header}>
          <div className = {classNames.burger} onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </div>
            <div className = {classNames.logo}>
              <Link to='/'>
                <img src="logothefeel.png" alt="logo" />
              </Link>
            </div>
          <ul className={classNames.tabletMenu}>
            <li>Présentation</li>
            <li>Notre formation</li>
            <li>Témoignages</li>
          </ul>
          <ul className={classNames.tabletMenu}>
            <li><Link to='/login'> <i class="far fa-user-circle"></i> mon compte </Link></li>
          </ul>
        </header>
          <ul className={`${classNames.menu} ${menuOpen ? classNames.active : ''}`}>
            <li>The feel</li>
            <li>Formation</li>
            <li>Témoignages</li>
          </ul>
          <ul className={`${classNames.menu} ${menuOpen ? classNames.active : ''}`}>
            <li className ={classNames.button} >
              <Link to='/login'>
                <i class="far fa-user-circle"></i> mon compte 
                </Link>
              </li>
          </ul>
      </div>
    )
}

export default Header
