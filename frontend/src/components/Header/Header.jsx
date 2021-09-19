import React, {useState} from 'react'
import classNames from './Header.module.css'

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
            <img src="logothefeel.png" alt="logo" />
          </div>
          <ul className={classNames.tabletMenu}>
            <li>The feel</li>
            <li>Formation</li>
            <li>Témoignages</li>
          </ul>
          <ul className={classNames.tabletMenu}>
            <li> <i class="far fa-user-circle"></i> mon compte</li>
          </ul>
        </header>
          <ul className={`${classNames.menu} ${menuOpen ? classNames.active : ''}`}>
            <li>The feel</li>
            <li>Formation</li>
            <li>Témoignages</li>
          </ul>
          <ul className={`${classNames.menu} ${menuOpen ? classNames.active : ''}`}>
            <li> <i class="far fa-user-circle"></i> mon compte</li>
          </ul>
      </div>
    )
}

export default Header
