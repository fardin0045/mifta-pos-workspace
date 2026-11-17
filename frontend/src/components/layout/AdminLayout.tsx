import { Link, Outlet, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { useAuth } from '@/features/auth/context/auth-context'
import { can } from '@/lib/permissions'
import { getResource } from '@/lib/api/resource.api'
import { useResource } from '@/hooks/useResource'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, GitBranch, Users, UtensilsCrossed, BadgePoundSterling, ShoppingBag, ContactRound, ChartColumn, ScrollText, Settings, Monitor, LogOut } from 'lucide-react'
const nav = [
 { to:'/dashboard', name:'Dashboard', icon:LayoutDashboard },
 { to:'/branches',name:'Branches',icon:GitBranch,permission:'BRANCH_WRITE' as const },
 { to:'/employees',name:'Employees',icon:Users,permission:'STAFF_WRITE' as const },
 { to:'/menu',name:'Menu & Items',icon:UtensilsCrossed,permission:'MENU_WRITE' as const },
 { to:'/price-lists',name:'Price Lists',icon:BadgePoundSterling,permission:'PRICES_WRITE' as const },
 { to:'/orders',name:'Orders',icon:ShoppingBag },
 { to:'/customers',name:'Customers',icon:ContactRound },
 { to:'/reports',name:'Reports',icon:ChartColumn,permission:'REPORTS_READ' as const },
 { to:'/audit-log',name:'Audit Log',icon:ScrollText,permission:'AUDIT_READ' as const },
 { to:'/settings',name:'Settings',icon:Settings,permission:'BRANCH_WRITE' as const },
 { to:'/pos',name:'POS Terminal',icon:Monitor,permission:'ORDER_CREATE' as const },
] as const
const loadBranches=()=>getResource('branches')
export function AdminLayout(){
 const {user,logout}=useAuth();const navigate=useNavigate();const branchList=useResource(loadBranches);const [expanded,setExpanded]=useState(false);const [branch,setBranch]=useState('all');if(!user)return null
 const allowed=nav.filter(n=>!('permission'in n)||can(user.role,n.permission))
 return <div className="min-h-screen bg-[#f4f7fb] text-slate-800 md:grid md:grid-cols-[240px_minmax(0,1fr)]">
  <aside className="bg-[#163b62] text-white"><div className="flex items-center justify-between border-b border-white/20 px-5 py-5"><strong className="tracking-wider">MIFTA POS</strong><button className="md:hidden" onClick={()=>setExpanded(!expanded)} aria-label="Toggle menu">☰</button></div>
   <nav aria-label="Admin navigation" className={(expanded?'block':'hidden')+' space-y-1 p-3 md:block'}>{allowed.map(({to,name,icon:Icon})=><Link key={to} to={to} activeProps={{className:'bg-[#366fa2]'}} className="flex items-center gap-3 rounded px-4 py-3 text-sm hover:bg-[#285b8c]"><Icon size={18}/>{name}</Link>)}</nav>
  </aside>
  <div className="min-w-0"><header className="flex flex-wrap items-center justify-between gap-3 border-b bg-white px-6 py-4"><div><h1 className="font-bold">Restaurant Administration</h1><p className="text-xs text-slate-500">{user.role.replaceAll('_',' ')} · {user.name}</p></div><div className="flex items-center gap-3">
   {user.role==='SUPER_ADMIN'&&<label className="flex items-center gap-2 text-sm">Branch <select title="Display only until branch-scoped API is implemented" aria-label="Branch switcher" value={branch} onChange={e=>setBranch(e.target.value)} className="rounded border p-2"><option value="all">All branches</option>{(branchList.data??[]).map(b=><option key={b.id} value={b.id}>{b.name}</option>)}</select></label>}
   <Button variant="outline" onClick={async()=>{await logout();await navigate({to:'/login'})}}><LogOut size={16}/> Log out</Button></div></header>
   <main className="mx-auto max-w-[1500px] p-5 lg:p-8"><Outlet/></main>
  </div></div>
}
