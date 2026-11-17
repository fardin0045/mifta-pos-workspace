import { createFileRoute, redirect } from '@tanstack/react-router'
import { PricingPage } from '@/features/pricing/components/PricingPage'
import { can } from '@/lib/permissions'
export const Route=createFileRoute('/_authenticated/price-lists')({beforeLoad:({context})=>{if(!can(context.auth.user!.role,'PRICES_WRITE'))throw redirect({to:'/dashboard'})},component:()=><PricingPage/>})
