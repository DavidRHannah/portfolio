import React,{ useState } from 'react';
import './Header.css';
import DRH_Logo from './icons/drh-icon-darkmode.svg';
import ToggleIcon from './icons/toggle-icon.svg'
import CommandIcon from './icons/command-icon.svg'

const Header = () => {
  const [activeLink, setActiveLink] = useState('dashboard');

  const handleClick = (link:string) => {
    console.log(link);
    setActiveLink(link);
  };

  return (
    <div className="navbar-container">
      <div className="left-container">
        <div className="img-container">
          <a
              href="./"
              className={`${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => handleClick('home')}
            >
            <img src={DRH_Logo} alt="DRH Logo" className="drh-logo" />

          </a>
        </div>
      </div>
      <div className="right-container">
      <div className="link-container">
          <a
            href="./dashboard"
            className={`${activeLink === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleClick('dashboard')}
          >
            Dashboard
          </a>
          <a
            href="./projects"
            className={`${activeLink === 'projects' ? 'active' : ''}`}
            onClick={() => handleClick('projects')}
          >
            Projects
          </a>
          <a
            href="./about"
            className={`${activeLink === 'about' ? 'active' : ''}`}
            onClick={() => handleClick('about')}
          >
            About
          </a>
          <a
            href="./guestbook"
            className={`${activeLink === 'guestbook' ? 'active' : ''}`}
            onClick={() => handleClick('guestbook')}
          >
            Guestbook
          </a>
          <a
            href="./uses"
            className={`${activeLink === 'uses' ? 'active' : ''}`}
            onClick={() => handleClick('uses')}
          >
            Uses
          </a>
        </div>
        <div className="button-container">
          <button className="toggle">
            <img src={ToggleIcon} alt="Toggle viewmode" />
          </button>
          <button className="command">
            <img src={CommandIcon} alt="Command" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
