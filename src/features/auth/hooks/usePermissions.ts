import { useQuery } from '@tanstack/react-query';
import { Permission, roleDefinitions } from '../types/rbac';

export function usePermissions() {
  const { data: userRole } = useQuery(['currentUserRole']);

  const hasPermission = (permission: Permission): boolean => {
    if (!userRole) return false;
    return roleDefinitions[userRole].some(
      p => p.action === permission.action && p.resource === permission.resource
    );
  };

  return { hasPermission };
}