import { ResourceView } from '@/components/shared/ResourceView'
import type { MenuItem } from '@/domain/types'
import { loadPricing } from '@/features/pricing/api/prices.api'
import { gbp } from '@/lib/format'
export function PricingPage() {
 return <ResourceView<MenuItem> title="Channel Price Lists" subtitle="PRC-01–PRC-11 · GBP VAT-inclusive. Backend resolves overrides." load={loadPricing} columns={[
  { key:'posName',label:'Item' },{ key:'pricesPence',label:'Counter',render:v=>gbp((v as MenuItem['pricesPence']).COUNTER??0) },{ key:'pricesPence',label:'Phone',render:v=>gbp((v as MenuItem['pricesPence']).PHONE??0) },{ key:'pricesPence',label:'Online',render:v=>gbp((v as MenuItem['pricesPence']).ONLINE??0) }
 ]} />
}
