import React from 'react';

interface AnalyticContainerProps {
  title: string;
  value: string | number;
  icon?: string;
}

const AnalyticContainer: React.FC<AnalyticContainerProps> = ({ title, value, icon }) => {
  return (
    <div className="analytic-container">
      <div className="analytic-content-container">
        {icon && <img src={icon} alt={`${title} icon`} className="analytic-icon" />}
        <h3 className="analytic-title">{title}</h3>
        <p className="analytic-value">{value}</p>
      </div>
    </div>
  );
};

export default AnalyticContainer;
