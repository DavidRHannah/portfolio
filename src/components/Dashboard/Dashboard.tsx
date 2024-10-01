import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import PageHeader from '../PageHeader/PageHeader';
import useDashboardData from '../../hooks/useDashboardData';
import AnalyticContainer from '../AnalyticContainer/AnalyticContainer';
import GithubLogo from './icons/github.svg';
import WakaTimeLogo from './icons/wakatime.svg';

const CACHE_DURATION = 600 * 100;

const Dashboard: React.FC = () => {
  const { data, loading, error } = useDashboardData();
  if (loading) return <div>Loading Dashboard...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <div>No Data Available</div>;

  const { github, wakatime } = data;
  console.log(github);
  // console.log(github.parse().data);
  
  return (
    <div className="dashboard-container">
      <PageHeader title="Dashboard" description="My personal dashboard. I use it to track metrics." />
      <div className="dashboard-content-container">
        <div className="widgets-container">
          {/* GitHub Followers */}
          {loading ? (
            <p>Loading GitHub data...</p>
          ) : (
            <AnalyticContainer title="GitHub Followers" value='0' icon={GithubLogo} />
          )}

          {/* WakaTime Hours */}
          {loading ? (
            <p>Loading WakaTime data...</p>
          ) : (
            <AnalyticContainer title="WakaTime Coding Hours" value='0' icon={WakaTimeLogo} />
          )} 
          

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
