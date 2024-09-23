import React, { useState } from 'react';
import './AnalyticContainer.css';

interface AnalyticContainerProps {
  icon1: string;
  icon2: string;
  number1: number;
  number2: number;
  title1: string;
  title2: string;
}

const AnalyticContainer: React.FC<AnalyticContainerProps> = ({ icon1, icon2, number1, number2, title1, title2 }) => {
  const [isSwipingOut, setIsSwipingOut] = useState(false);
  const [isSwipingIn, setIsSwipingIn] = useState(false);
  const [newContent, setNewContent] = useState(false);

  const handleSwipeUp = () => {
    setIsSwipingOut(true); 

    setTimeout(() => {
      setIsSwipingOut(false);
      setNewContent(!newContent); 
      setIsSwipingIn(true); 
    }, 500); 

    setTimeout(() => {
      setIsSwipingIn(false);
    }, 1000); 
  };

  return (
    <div className="analytic-container" onClick={handleSwipeUp}>
      <div className={`analytic-top-container ${isSwipingOut ? 'swipe-out' : isSwipingIn ? 'swipe-in' : ''}`}>
        <div className="logo-container">
          <img src={newContent ? icon2 : icon1} alt="icon" />
        </div>
        <div className="number-container">
          {newContent ? number2 : number1}
        </div>
      </div>
      <div className={`analytic-bottom-container ${isSwipingOut ? 'swipe-out' : isSwipingIn ? 'swipe-in' : ''}`}>
        <div className="analytic-title">
          {newContent ? title2 : title1}
        </div>
      </div>
    </div>
  );
};

export default AnalyticContainer;
