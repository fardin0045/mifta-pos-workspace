import { ResourceView } from '@/components/shared/ResourceView'
import type { MenuItem } from '@/domain/types'
import { loadMenu } from '@/features/menu/api/menu.api'

export function MenuPage() {
 return <ResourceView<MenuItem> title="Menu & Items" subtitle="MENU-01–MENU-10 · Shared master menu" load={loadMenu} columns={[
  { key:'itemNumber',label:'Item No.' },{ key:'posName',label:'POS Name' },{ key:'fullName',label:'Full Name' },{ key:'typeId',label:'Type' },{ key:'available',label:'Availability',render:v=>v?'Available':'Unavailable' }
 ]} />
}
