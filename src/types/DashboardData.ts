import { GitHubRepo } from './GitHub';
import { WakatimeStats } from './Wakatime';

export interface DashboardData {
  github: GitHubRepo[];
  wakatime: WakatimeStats;
}