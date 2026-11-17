import { createFileRoute, redirect } from '@tanstack/react-router'
import { ReportsPage } from '@/features/reports/components/ReportsPage'
import { can } from '@/lib/permissions'
export const Route=createFileRoute('/_authenticated/reports')({beforeLoad:({context})=>{if(!can(context.auth.user!.role,'REPORTS_READ'))throw redirect({to:'/dashboard'})},component:()=><ReportsPage/>})
