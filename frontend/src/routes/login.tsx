import { createFileRoute, redirect } from '@tanstack/react-router'
import { LoginPage } from '@/features/auth/components/LoginPage'

export const Route = createFileRoute('/login')({
  beforeLoad: ({ context }) => {
    if (context.auth.user) throw redirect({ to: '/dashboard' })
  },
  component: LoginPage,
})
