export type Role = 'owner' | 'admin' | 'editor' | 'viewer';

export interface Permission {
  action: 'create' | 'read' | 'update' | 'delete';
  resource: 'templates' | 'consents' | 'users' | 'organizations' | 'integrations';
}

export interface RoleDefinition {
  name: Role;
  permissions: Permission[];
}

export const roleDefinitions: Record<Role, Permission[]> = {
  owner: [
    { action: 'create', resource: 'organizations' },
    { action: 'delete', resource: 'organizations' },
  ],
  admin: [
    { action: 'create', resource: 'templates' },
    { action: 'update', resource: 'templates' },
    { action: 'delete', resource: 'templates' },
  ],
  editor: [
    { action: 'create', resource: 'templates' },
    { action: 'update', resource: 'templates' },
  ],
  viewer: [
    { action: 'read', resource: 'templates' },
    { action: 'read', resource: 'consents' },
  ],
};