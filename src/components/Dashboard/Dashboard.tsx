import React from 'react';
import './Dashboard.css';
import PageHeader from '../PageHeader/PageHeader';
import AnalyticContainer from '../AnalyticContainer/AnalyticContainer';
import TimeIcon from './icons/time-icon.svg';
import GithubLogo from './icons/github-logo.svg';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <PageHeader title="Dashboard" description="My personal dashboard. I use it to track metrics." />
      <div className="dashboard-content-container">
        <AnalyticContainer 
          icon1={TimeIcon}
          icon2={TimeIcon}
          number1={27}
          number2={15}
          title1="Github Stars"
          title2="Commits"
        />
        <AnalyticContainer 
          icon1={TimeIcon}
          icon2={GithubLogo}
          number1={2}
          number2={10}
          title1="Coding Hours"
          title2="Github Followers"
        />
        <AnalyticContainer 
          icon1={GithubLogo}
          icon2={TimeIcon}
          number1={27}
          number2={15}
          title1="Github Stars"
          title2="Commits"
        />
      </div>
    </div>
  );
};

export default Dashboard;
