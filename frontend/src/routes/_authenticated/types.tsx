import { createFileRoute, redirect } from '@tanstack/react-router'
import { TypesPage } from '@/features/menu/components/TypesPage'
import { can } from '@/lib/permissions'
export const Route=createFileRoute('/_authenticated/types')({beforeLoad:({context})=>{if(!can(context.auth.user!.role,'MENU_WRITE'))throw redirect({to:'/dashboard'})},component:()=><TypesPage/>})
