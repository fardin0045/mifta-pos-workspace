import { ResourceView } from '@/components/shared/ResourceView'
import type { Order } from '@/domain/types'
import { loadOrders } from '@/features/orders/api/orders.api'
import { gbp, ukDate } from '@/lib/format'
export function OrdersPage() {
 return <ResourceView<Order> title="Orders" subtitle="OM-01–OM-08 · Order lifecycle" load={loadOrders} columns={[
  { key:'orderNumber',label:'Order' },{ key:'createdAt',label:'Created',render:v=>ukDate(String(v)) },{ key:'channel',label:'Channel' },{ key:'fulfilment',label:'Fulfilment' },{ key:'paymentStatus',label:'Payment' },{ key:'totalPence',label:'Total',render:v=>gbp(Number(v)) },{ key:'status',label:'Status' }
 ]} />
}
