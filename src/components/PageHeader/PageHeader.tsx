import React from 'react';
import './PageHeader.css';

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="page-header-container">
      <h1>{title}</h1>
      <p>{description}</p>
      <hr />
    </div>
  );
};

export default PageHeader;