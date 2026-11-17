import { createFileRoute, redirect } from '@tanstack/react-router'
import { AdminLayout } from '@/components/layout/AdminLayout'
export const Route=createFileRoute('/_authenticated')({beforeLoad:({context})=>{if(!context.auth.user)throw redirect({to:'/login'})},component:()=> <AdminLayout/>})
