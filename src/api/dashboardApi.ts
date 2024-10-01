import client from './client';
import { DashboardData } from '../types/DashboardData';

export const fetchDashboardData = async (): Promise<DashboardData> => {
    const response = await client.get<DashboardData>('/dashboard');
    return response.data;
};