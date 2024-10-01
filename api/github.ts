import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';
import dotenv from 'dotenv';
import { GitHubRepo } from '../src/types/GitHub';

dotenv.config();

const GITHUB_API_URL = process.env.GITHUB_API_URL || 'https://api.github.com';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const response = await axios.get<GitHubRepo[]>(
      `${GITHUB_API_URL}/users/DavidRHannah/repos`
    );

    res.status(200).json(response.data);
  } 
  
  catch (error: any) {
    console.error('GitHub API Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch GitHub data' });
  }
}
