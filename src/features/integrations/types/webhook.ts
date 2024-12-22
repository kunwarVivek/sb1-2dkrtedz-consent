export interface WebhookConfig {
  id: string;
  name: string;
  url: string;
  secret: string;
  events: WebhookEvent[];
  status: 'active' | 'inactive';
  retryPolicy: {
    maxAttempts: number;
    backoffDelay: number;
  };
}

export type WebhookEvent = 
  | 'consent.granted'
  | 'consent.revoked'
  | 'consent.updated'
  | 'template.published'
  | 'template.archived';