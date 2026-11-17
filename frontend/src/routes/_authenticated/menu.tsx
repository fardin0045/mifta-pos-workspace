import { createFileRoute, redirect } from '@tanstack/react-router'
import { MenuPage } from '@/features/menu/components/MenuPage'
import { can } from '@/lib/permissions'
export const Route=createFileRoute('/_authenticated/menu')({beforeLoad:({context})=>{if(!can(context.auth.user!.role,'MENU_WRITE'))throw redirect({to:'/dashboard'})},component:()=><MenuPage/>})
