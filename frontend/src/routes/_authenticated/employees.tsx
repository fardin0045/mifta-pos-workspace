import { createFileRoute, redirect } from '@tanstack/react-router'
import { EmployeesPage } from '@/features/employees/components/EmployeesPage'
import { can } from '@/lib/permissions'
export const Route=createFileRoute('/_authenticated/employees')({beforeLoad:({context})=>{if(!can(context.auth.user!.role,'STAFF_WRITE'))throw redirect({to:'/dashboard'})},component:()=><EmployeesPage/>})
