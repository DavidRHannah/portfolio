import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';
import dotenv from 'dotenv';
import { DashboardData } from '../src/types/DashboardData';
import { GitHubRepo } from '../src/types/GitHub';
import { WakatimeStats } from '../src/types/Wakatime';

dotenv.config();

const GITHUB_API_URL = process.env.GITHUB_API_URL || 'https://api.github.com';
const WAKATIME_API_URL = process.env.WAKATIME_API_URL || 'https://wakatime.com/share';

const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const [githubResponse, wakatimeResponse] = await Promise.all([
      axios.get<GitHubRepo[]>(`${GITHUB_API_URL}/users/DavidRHannah/repos`),
      axios.get<WakatimeStats>(`${WAKATIME_API_URL}/share/${WAKATIME_API_KEY}.json`)
    ]);

    const dashboardData: DashboardData = {
      github: githubResponse.data,
      wakatime: wakatimeResponse.data,
    };

    res.status(200).json(dashboardData);
  } 
  
  catch (error: any) {
    console.error('Dashboard Aggregation Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
}
