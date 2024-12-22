export interface ConsentAnalytics {
  templateId: string;
  period: {
    start: string;
    end: string;
  };
  metrics: {
    views: number;
    interactions: number;
    acceptanceRate: number;
    averageResponseTime: number;
  };
  breakdown: {
    byRegion: Record<string, number>;
    byUserType: Record<string, number>;
    byOption: Record<string, number>;
  };
}