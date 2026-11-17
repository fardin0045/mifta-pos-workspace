import { ResourceView } from '@/components/shared/ResourceView'
import type { Employee } from '@/domain/types'
import { loadEmployees } from '@/features/employees/api/employees.api'

export function EmployeesPage() {
 return <ResourceView<Employee> title="Employees" subtitle="EMP-01–EMP-07 · Role-scoped employees" load={loadEmployees} columns={[
  { key:'staffCode',label:'Staff Code' },{ key:'fullName',label:'Employee' },{ key:'role',label:'Role' },{ key:'email',label:'Email' },{ key:'active',label:'Status',render:v=>v?'Active':'Inactive' }
 ]} />
}
