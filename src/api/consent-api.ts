import { createApi } from '@/lib/api-client';

export const consentApi = createApi({
  baseURL: '/api/v1/consent',
  endpoints: {
    createTemplate: 'POST /templates',
    updateTemplate: 'PUT /templates/:id',
    publishTemplate: 'POST /templates/:id/publish',
    collectConsent: 'POST /collect',
    withdrawConsent: 'POST /withdraw',
    getAnalytics: 'GET /analytics',
  },
});