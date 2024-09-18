import React from 'react';
import './Header.css';
import DRH_Logo from './icons/drh-icon-darkmode.svg';
import ToggleIcon from './icons/toggle-icon.svg'
import CommandIcon from './icons/command-icon.svg'

const Header = () => {
  return (
    <div className="navbar-container">
      <div className="left-container">
        <div className="img-container">
          <img src={DRH_Logo} alt="DRH Logo" className="drh-logo" />
        </div>
      </div>
      <div className="right-container">
        <div className="link-container">
          <a className="link active" href="./dashboard">Dashboard</a>
          <a href="./projects">Projects</a>
          <a href="./about">About</a>
          <a href="./guestbook">Guestbook</a>
          <a href="./uses">Uses</a>          
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
