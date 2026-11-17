import { env } from '@/config/env'
import { apiRequest } from './client'
import { branches,employees,menuTypes,menuItems,customers,orders,auditEntries,reportSummary } from '@/mocks/fixtures'
import type { Branch, Employee, MenuType, MenuItem, Customer, Order, AuditEntry, ReportSummary } from '@/domain/types'
interface Resources { branches: Branch[]; employees: Employee[]; 'menu/types': MenuType[]; 'menu/items': MenuItem[]; customers: Customer[]; orders: Order[]; 'audit-log': AuditEntry[]; 'reports/summary': ReportSummary }
const mockData: Resources = { branches, employees, 'menu/types':menuTypes, 'menu/items':menuItems,customers,orders,'audit-log':auditEntries,'reports/summary':reportSummary }
/** All backend paths are proposed in docs/API_CONTRACT.md; confirm with your teammate. */
export async function getResource<K extends keyof Resources>(key:K):Promise<Resources[K]> {
 if(env.mock)return Promise.resolve(mockData[key])
 return apiRequest<Resources[K]>(`/${key}`)
}
