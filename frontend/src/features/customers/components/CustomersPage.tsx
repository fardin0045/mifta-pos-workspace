import { ResourceView } from '@/components/shared/ResourceView'
import type { Customer } from '@/domain/types'
import { loadCustomers } from '@/features/customers/api/customers.api'

export function CustomersPage() {
 return <ResourceView<Customer> title="Customers" subtitle="CUS-01–CUS-12 · Shared customer records" load={loadCustomers} columns={[
  { key:'name',label:'Customer' },{ key:'phone',label:'Phone' },{ key:'postcode',label:'Post Code' },{ key:'address',label:'Address' },{ key:'orderCount',label:'Orders' }
 ]} />
}
