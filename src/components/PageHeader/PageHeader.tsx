import React from 'react';
import './PageHeader.css';

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="page-header-container">
      <div className="page-header-title">{title}</div>
      <div className="page-header-desc">{description}</div>
      <hr className="page-header-bar" />
    </div>
  );
};

export default PageHeader;