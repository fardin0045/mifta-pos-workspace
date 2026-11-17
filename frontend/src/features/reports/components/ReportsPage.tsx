import { useResource } from '@/hooks/useResource'
import { getResource } from '@/lib/api/resource.api'
import { gbp } from '@/lib/format'
const loadSummary=()=>getResource('reports/summary')
export function ReportsPage(){
 const {data,loading,error}=useResource(loadSummary)
 if(loading)return <p role="status">Loading reports…</p>
 if(error)return <p role="alert" className="rounded bg-red-50 p-6 text-red-800">Failed to load reports: {error}</p>
 if(!data)return null
 return <div className="space-y-5"><h2 className="text-2xl font-bold">Sales Reports</h2><p className="text-sm text-slate-500">RPT-01–RPT-10 · API summary. Detailed date-filtered reporting not yet built.</p><div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{[['Gross sales',gbp(data.grossPence)],['Orders',data.orderCount],['Refunds',gbp(data.refundsPence)],['Delivery',data.deliveryCount]].map(([k,v])=><div key={k} className="rounded-lg border bg-white p-6"><p>{k}</p><p className="mt-2 text-2xl font-semibold">{v}</p></div>)}</div><div className="rounded-lg border bg-white p-6"><h3 className="font-semibold">Reports requiring backend endpoints</h3><p className="mt-3 text-sm text-slate-600">Sales by branch/channel, item sales, cashier, VAT, hourly, customers and calls. Do not calculate final financial reports from browser data.</p></div></div>
}
