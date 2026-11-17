import { createFileRoute, redirect } from '@tanstack/react-router'
import { AuditPage } from '@/features/audit/components/AuditPage'
import { can } from '@/lib/permissions'
export const Route=createFileRoute('/_authenticated/audit-log')({beforeLoad:({context})=>{if(!can(context.auth.user!.role,'AUDIT_READ'))throw redirect({to:'/dashboard'})},component:()=><AuditPage/>})
