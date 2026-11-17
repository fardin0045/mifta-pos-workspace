import { createFileRoute, redirect } from '@tanstack/react-router'
import { SettingsPage } from '@/features/settings/components/SettingsPage'
import { can } from '@/lib/permissions'
export const Route=createFileRoute('/_authenticated/settings')({beforeLoad:({context})=>{if(!can(context.auth.user!.role,'BRANCH_WRITE'))throw redirect({to:'/dashboard'})},component:()=><SettingsPage/>})
