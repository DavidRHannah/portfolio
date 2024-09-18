import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import DRH_Logo from './icons/drh-icon-darkmode.svg';
import ToggleIcon from './icons/toggle-icon.svg';
import CommandIcon from './icons/command-icon.svg';

const Header = () => {
  const location = useLocation();
  const getActiveLink = (path: string) => location.pathname === path ? 'active' : '';

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem('theme');
    return storedPreference === 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className="navbar-container">
      <div className="left-container">
        <div className="img-container">
          <Link to="/" className={getActiveLink('/')}>
            <img 
              src={DRH_Logo} 
              alt="DRH Logo" 
              className="drh-logo" />
          </Link>
        </div>
      </div>
      <div className="right-container">
      <div className="link-container">
          <Link to="/dashboard" className={getActiveLink('/dashboard')}>
            Dashboard
          </Link>
          <Link to="/projects" className={getActiveLink('/projects')}>
            Projects
          </Link>
          <Link to="/about" className={getActiveLink('/about')}>
            About
          </Link>
          <Link to="/guestbook" className={getActiveLink('/guestbook')}>
            Guestbook
          </Link>
          <Link to="/uses" className={getActiveLink('/uses')}>
            Uses
          </Link>
        </div>
        <div className="button-container">
          <button className="toggle" onClick={()=>setIsDarkMode(!isDarkMode)}>
            <img 
              src={ToggleIcon} 
              alt="Toggle viewmode" />
          </button>
          <button className="command">
            <img 
              src={CommandIcon} 
              alt="Command" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
