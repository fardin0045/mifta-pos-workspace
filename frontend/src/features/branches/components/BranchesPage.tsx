import { ResourceView } from '@/components/shared/ResourceView'
import type { Branch } from '@/domain/types'
import { loadBranches } from '@/features/branches/api/branches.api'

export function BranchesPage() {
 return <ResourceView<Branch> title="Branches" subtitle="BR-01–BR-07 · Branch settings and availability" load={loadBranches} columns={[
  { key:'code',label:'Code' },{ key:'name',label:'Branch' },{ key:'city',label:'City' },{ key:'postcode',label:'Post Code' },{ key:'active',label:'Status',render:v=>v?'Active':'Inactive' }
 ]} />
}
