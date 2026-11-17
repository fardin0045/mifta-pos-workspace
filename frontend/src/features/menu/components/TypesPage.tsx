import { ResourceView } from '@/components/shared/ResourceView'
import type { MenuType } from '@/domain/types'
import { loadTypes } from '@/features/menu/api/types.api'

export function TypesPage() {
 return <ResourceView<MenuType> title="Types / Categories" subtitle="Three-level menu: Menu / Type / Item" load={loadTypes} columns={[
  { key:'sortOrder',label:'Order' },{ key:'name',label:'Type' },{ key:'menu',label:'Menu' },{ key:'active',label:'Status',render:v=>v?'Active':'Inactive' }
 ]} />
}
