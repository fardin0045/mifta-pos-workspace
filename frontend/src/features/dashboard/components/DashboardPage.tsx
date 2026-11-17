import { Link } from '@tanstack/react-router'
import { getResource } from '@/lib/api/resource.api'
import { useResource } from '@/hooks/useResource'
import { gbp } from '@/lib/format'
const loadSummary=()=>getResource('reports/summary')
const loadOrders=()=>getResource('orders')
export function DashboardPage(){
 const summary=useResource(loadSummary);const list=useResource(loadOrders)
 if(summary.loading||list.loading)return <p role="status">Loading Dashboard…</p>
 if(summary.error||list.error)return <p role="alert" className="rounded bg-red-50 p-6 text-red-800">Unable to load dashboard: {summary.error||list.error}</p>
 const report=summary.data!;const orders=list.data??[];
 const metrics=[['Gross sales today',gbp(report.grossPence)],['Orders today',report.orderCount],['Delivery orders',report.deliveryCount],['Refunds',gbp(report.refundsPence)]];
 return <div className="space-y-7"><div><h2 className="text-2xl font-bold">Dashboard</h2><p className="text-slate-500">Chain overview</p></div><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{metrics.map(([label,value])=><div key={label} className="rounded-lg border bg-white p-6 shadow-sm"><p className="text-sm text-slate-500">{label}</p><p className="mt-3 text-3xl font-semibold text-[#163b62]">{value}</p></div>)}</div><div className="grid gap-5 lg:grid-cols-2"><div className="rounded-lg border bg-white p-6"><h3 className="mb-5 font-semibold">Recent orders</h3>{orders.map(o=><div key={o.id} className="flex justify-between border-t py-3 text-sm"><span>{o.orderNumber} · {o.channel}</span><span>{gbp(o.totalPence)}</span></div>)}<Link to="/orders" className="mt-4 inline-block text-sm font-semibold text-blue-700">View orders</Link></div><div className="rounded-lg border bg-white p-6"><h3 className="mb-5 font-semibold">Management shortcuts</h3><div className="grid gap-3">{[['Branches','/branches'],['Employees','/employees'],['Menu Management','/menu'],['Price Lists','/price-lists']].map(([s,url])=><Link key={s} to={url} className="rounded border bg-[#f4f7fb] px-4 py-3 text-sm hover:bg-blue-50">{s}</Link>)}</div></div></div></div>
}
