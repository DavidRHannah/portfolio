import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import './AnalyticContainer.css';
import { Link } from 'react-router-dom';
import RedirectIcon from './icons/open-in-new-icon.png';

interface AnalyticContainerProps {
  title: string;
  value: number;
  icon: string;
  hoverText: string;
  hoverLink: string;
}

const AnalyticContainer: React.FC<AnalyticContainerProps> = ({ title, value, icon, hoverText, hoverLink }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="analytic-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={() => {hovered ? setHovered(false): setHovered(true)}}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.div 
        className="top-container"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: hovered ? 0 : 1, y: hovered ? -20 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="analytic-icon-container">
          <img src={icon} alt={`${title} icon`} className="analytic-icon" />
        </div>
        <div className="analytic-value">
          <CountUp end={value} duration={1} separator="," />
        </div>
      </motion.div>

      <motion.div 
        className="bottom-container"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: hovered ? 0 : 1, y: hovered ? -20 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.div>  

      {hovered && (
          <motion.div
            className="new-content"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 30 }}
            transition={{ duration: 0.2 }}
          >
            <Link to={hoverLink} target="_blank" className="hover-link">{hoverText} 
            <img src={RedirectIcon} alt="redirect icon" className="redirect-icon" /></Link>
          </motion.div>
        )}
    </motion.div>
  );
};

export default AnalyticContainer;
