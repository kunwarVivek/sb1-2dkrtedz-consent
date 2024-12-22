export interface ConsentRecord {
  id: string;
  templateId: string;
  userId: string;
  version: number;
  responses: Record<string, boolean>;
  metadata: {
    ipAddress?: string;
    userAgent?: string;
    timestamp: string;
    geolocation?: {
      country: string;
      region: string;
    };
  };
  history: {
    action: 'granted' | 'revoked' | 'updated';
    timestamp: string;
    changes?: Record<string, any>;
  }[];
}

export interface RetentionPolicy {
  type: 'fixed' | 'rolling';
  duration: number; // in days
  autoDelete: boolean;
  notifyBefore: number; // in days
}