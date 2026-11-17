import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import type { AuthState } from '@/features/auth/context/auth-context'
import '../styles.css'

interface RouterContext {
  auth: AuthState
}
export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <Outlet />,
})
