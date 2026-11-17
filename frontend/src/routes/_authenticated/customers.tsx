import { createFileRoute } from '@tanstack/react-router'
import { CustomersPage } from '@/features/customers/components/CustomersPage'
export const Route=createFileRoute('/_authenticated/customers')({component:()=><CustomersPage/>})
