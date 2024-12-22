export interface Integration {
  id: string;
  type: 'cms' | 'analytics' | 'crm' | 'custom';
  provider: string;
  config: Record<string, any>;
  status: 'active' | 'inactive';
  lastSync?: string;
}

export interface WebhookConfig {
  url: string;
  events: string[];
  secret: string;
  active: boolean;
}