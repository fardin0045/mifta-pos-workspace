import type { MenuItem, OrderChannel, OrderLine } from '@/domain/types'
/** SRS PRC-02, PRC-06: branch+channel > chain+channel > chain Counter. Branch overrides to be added from API. */
export function resolveChainPrice(item:MenuItem, channel:OrderChannel):number { return item.pricesPence[channel] ?? item.pricesPence.COUNTER ?? 0 }
export function subtotalPence(lines:OrderLine[]):number { return lines.reduce((sum,l)=>sum+l.unitPricePence*l.quantity,0) }
export function addLine(lines:OrderLine[], item:MenuItem, channel:OrderChannel):OrderLine[] {
 const unitPricePence=resolveChainPrice(item,channel)
 const existing=lines.find(l=>l.itemId===item.id&&l.unitPricePence===unitPricePence&&!l.notes)
 return existing?lines.map(l=>l.id===existing.id?{...l,quantity:l.quantity+1}:l):[...lines,{id:crypto.randomUUID(),itemId:item.id,name:item.posName,quantity:1,unitPricePence}]
}
