import { createFileRoute, redirect } from '@tanstack/react-router'
import { PosPage } from '@/features/pos/components/PosPage'
import { can } from '@/lib/permissions'
export const Route=createFileRoute('/pos')({beforeLoad:({context})=>{if(!context.auth.user)throw redirect({to:'/login'});if(!can(context.auth.user.role,'ORDER_CREATE'))throw redirect({to:'/dashboard'})},component:()=><PosPage/>})
