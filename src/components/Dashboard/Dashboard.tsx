import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import PageHeader from '../PageHeader/PageHeader';
import AnalyticContainer from '../AnalyticContainer/AnalyticContainer';
import GithubLogo from './icons/github.svg';
import WakaTimeLogo from './icons/wakatime.svg';

const cache = new Map();

const Dashboard: React.FC = () => {
  const WAKATIME_API_URL = 'https://wakatime.com/share';
  const WAKATIME_SHAREABLE_ID = '@86699741-fe5d-45d8-8434-92fae0d6440e/97968c7c-66e0-4771-9ec6-cde5874bde5e';
  const GITHUB_API_URL = 'https://api.github.com';
  const GITHUB_USERNAME = 'DavidRHannah';

  const wakatimeUrl = `${WAKATIME_API_URL}/${WAKATIME_SHAREABLE_ID}.json`;
  const githubUrl = `${GITHUB_API_URL}/users/${GITHUB_USERNAME}`;

  const [wakaHours, setWakaHours] = useState<number | null>(null);
  const [githubFollowerCount, setGithubFollowerCount] = useState<number | null>(null);
  const [githubStarCount, setGithubStarCount] = useState<number | null>(null);

  const fetchWithCache = async (url: string, cacheKey: string, callback: (data: any) => void) => {
    if (cache.has(cacheKey)) {
      console.log(`Using cached data for ${cacheKey}`);
      const data = cache.get(cacheKey);
      callback(data);
    } else {
      const response = await fetch(url);
      const data = await response.json();
      cache.set(cacheKey, data);
      callback(data);
    }
  };

  useEffect(() => {
    fetchWithCache(wakatimeUrl, 'wakatime', (data) => {
      const totalSeconds = data.data.grand_total.total_seconds;
      setWakaHours(Math.ceil(totalSeconds / 3600));
    });
  }, [wakatimeUrl]);

  useEffect(() => {
    fetchWithCache(githubUrl, 'github-user', (data) => {
      setGithubFollowerCount(data.followers);
    });
    fetchWithCache(`${githubUrl}/repos`, 'github-repos', (repos) => {
      const stars = repos.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
      setGithubStarCount(stars);
    });
  }, [githubUrl]);


  return (
    <div className="dashboard-container">
      <PageHeader title="Dashboard" description="My personal dashboard. I use it to track metrics." />
      <div className="dashboard-content-container">
          <AnalyticContainer title="Followers" value={githubFollowerCount || 0} icon={GithubLogo} hoverText={"Github"} hoverLink="https://github.com/DavidRHannah" />
          <AnalyticContainer title="Stars" value={githubStarCount || 0} icon={GithubLogo} hoverText={"Github"} hoverLink="https://github.com/DavidRHannah" />
          <AnalyticContainer title="Coding Hours" value={wakaHours || 0} icon={WakaTimeLogo} hoverText={"Wakatime"} hoverLink="https://wakatime.com/@86699741-fe5d-45d8-8434-92fae0d6440e" />
      </div>
    </div>
  );
};

export default Dashboard;
