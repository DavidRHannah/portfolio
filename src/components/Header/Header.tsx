import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import DRH_Logo from './icons/drh-icon-darkmode.svg';
import ToggleIcon from './icons/toggle-icon.svg';
import CommandIcon from './icons/command-icon.svg';
import HamburgerMenuIcon from './icons/hamburger-menu.svg';

const Header: React.FC = () => {
  const location = useLocation();
  const getActiveLink = (path: string) => location.pathname === path ? 'active' : '';

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem('theme');
    return storedPreference === 'dark';
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (dropdownOpen && !target.closest('.dropdown') && !target.closest('.hamburger')) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="navbar-container">
      <div className="left-container">
        <div className="navbar-img-container">
          <Link to="/" className={getActiveLink('/')}>
            <img src={DRH_Logo} alt="DRH Logo" className="drh-logo" />
          </Link>
        </div>
      </div>
      <div className="right-container">
        <div className="navbar-link-container">
          <Link to="/dashboard" className={getActiveLink('/dashboard') + " link"}>Dashboard</Link>
          <Link to="/projects" className={getActiveLink('/projects') + " link"}>Projects</Link>
          <Link to="/about" className={getActiveLink('/about') + " link"}>About</Link>
          <Link to="/guestbook" className={getActiveLink('/guestbook') + " link"}>Guestbook</Link>
        </div>
        <div className="button-container">
          <button className="toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
            <img src={ToggleIcon} alt="Toggle viewmode" />
          </button>
          <button className="command">
            <img src={CommandIcon} alt="Command" />
          </button>
          <button className="hamburger" onClick={toggleDropdown}>
            <img src={HamburgerMenuIcon} alt="Menu dropdown" />
          </button>
        </div>
        <div className={`dropdown ${dropdownOpen ? 'open' : ''}`}>
          <Link to="/dashboard" className={getActiveLink('/dashboard')} onClick={closeDropdown}>Dashboard</Link>
          <Link to="/projects" className={getActiveLink('/projects')} onClick={closeDropdown}>Projects</Link>
          <Link to="/about" className={getActiveLink('/about')} onClick={closeDropdown}>About</Link>
          <Link to="/guestbook" className={getActiveLink('/guestbook')} onClick={closeDropdown}>Guestbook</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
