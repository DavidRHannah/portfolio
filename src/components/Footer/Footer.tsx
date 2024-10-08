import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import BackgroundImage from '../../background-bottom.png';

const Footer = () => {
  return (
    <div className='footer-container'>
      <img src={BackgroundImage} alt="background" />
      <div className="footer-content-container">
        <div className="footer-link-container">
            <div className="link-container-column">
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/dashboard" className="footer-link">
              Dashboard
            </Link>
            <Link to="/projects" className="footer-link">
              Projects
            </Link>
            </div>
            <div className="link-container-column">
              <Link to="/guestbook" className="footer-link">
                Guestbook
              </Link>
              <a href="https://github.com/DavidRHannah/portfolio" className="footer-link" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a href="https://linkedin.com/in/davidrhannah" className="footer-link" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
        </div>
        <div className="misc-container">
          <div className="copyright-container">	
            &copy; 2024 DRH
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
