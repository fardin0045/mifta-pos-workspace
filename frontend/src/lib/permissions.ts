import type { Role } from '@/domain/types'
export type Permission = 'BRANCH_WRITE' | 'STAFF_WRITE' | 'MENU_WRITE' | 'PRICES_WRITE' | 'AUDIT_READ' | 'REPORTS_READ' | 'ORDER_CREATE' | 'CUSTOMER_EXPORT'
export const rolePermissions: Record<Role, readonly Permission[]> = {
  SUPER_ADMIN: ['BRANCH_WRITE','STAFF_WRITE','MENU_WRITE','PRICES_WRITE','AUDIT_READ','REPORTS_READ','ORDER_CREATE','CUSTOMER_EXPORT'],
  BRANCH_MANAGER: ['STAFF_WRITE','AUDIT_READ','REPORTS_READ','ORDER_CREATE'],
  CASHIER: ['ORDER_CREATE'],
}
/** UI convenience only. The backend MUST enforce branch-scoped authorization per request. */
export const can = (role: Role, permission: Permission) => rolePermissions[role].includes(permission)
