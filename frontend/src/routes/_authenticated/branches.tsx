import { createFileRoute, redirect } from '@tanstack/react-router'
import { BranchesPage } from '@/features/branches/components/BranchesPage'
import { can } from '@/lib/permissions'
export const Route=createFileRoute('/_authenticated/branches')({beforeLoad:({context})=>{if(!can(context.auth.user!.role,'BRANCH_WRITE'))throw redirect({to:'/dashboard'})},component:()=><BranchesPage/>})
