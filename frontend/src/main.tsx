
import { StrictMode, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'

import {
  AuthProvider,
  useAuth,
} from '@/features/auth/context/auth-context'

import { router } from './router'

function AppRouter() {
  const auth = useAuth()

  // Do not invalidate the router before authentication
  // initialization and RouterProvider context injection.
  useEffect(() => {
    if (auth.loading) return

    void router.invalidate()
  }, [auth.loading, auth.user])

  // Wait until the initial session check is complete.
  if (auth.loading) {
    return (
      <div className="grid min-h-screen place-items-center text-slate-600">
        Checking session...
      </div>
    )
  }

  return (
    <RouterProvider
      router={router}
      context={{ auth }}
    />
  )
}

ReactDOM.createRoot(
  document.getElementById('app')!
).render(
  <StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </StrictMode>
)
