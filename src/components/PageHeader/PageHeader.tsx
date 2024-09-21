import React from 'react';
import './PageHeader.css';

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="page-header-container">
      <div className="title">{title}</div>
      <div className="desc">{description}</div>
      <hr />
    </div>
  );
};

export default PageHeader;