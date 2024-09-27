import React from 'react';
import './Dashboard.css';
import PageHeader from '../PageHeader/PageHeader';
// import AnalyticContainer from '../AnalyticContainer/AnalyticContainer';
// import TimeIcon from './icons/time-icon.svg';
// import GithubLogo from './icons/github-logo.svg';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <PageHeader title="Dashboard" description="My personal dashboard. I use it to track metrics." />
      <div className="dashboard-content-container">
        <div className="widgets-container">
          {/* <GitHubStats /> */}
          {/* <GithubReadMeStats /> */}
          {/* <WakatimeStats /> */}
          {/* <LinkedInStats /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
