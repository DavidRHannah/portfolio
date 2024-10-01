import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';
import dotenv from 'dotenv';
import { WakatimeStats } from '../src/types/Wakatime';

dotenv.config();

const WAKATIME_API_URL = process.env.WAKATIME_API_URL || 'https://wakatime.com/share';
const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const response = await axios.get<WakatimeStats>(
      `${WAKATIME_API_URL}/${WAKATIME_API_KEY}.json`
    );

    res.status(200).json(response.data);
  } 
  
  catch (error: any) {
    console.error('Wakatime API Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch Wakatime data' });
  }
}
