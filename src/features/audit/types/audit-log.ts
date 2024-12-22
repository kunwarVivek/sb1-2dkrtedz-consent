export interface AuditLog {
  id: string;
  timestamp: string;
  actor: {
    id: string;
    type: 'user' | 'system' | 'api';
    identifier: string;
  };
  action: {
    type: 'create' | 'update' | 'delete' | 'view' | 'export';
    resource: string;
    resourceId: string;
  };
  metadata: {
    ipAddress?: string;
    userAgent?: string;
    changes?: Record<string, any>;
  };
}