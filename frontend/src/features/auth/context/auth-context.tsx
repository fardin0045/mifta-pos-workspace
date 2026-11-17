import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { authApi, type LoginInput } from '../api/auth.api'
import type { User } from '@/domain/types'
export interface AuthState {
  user: User | null; loading: boolean; error: string | null
  login(input: LoginInput): Promise<void>; logout(): Promise<void>
}
const Context = createContext<AuthState | null>(null)
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => { let active = true; authApi.me().then(v => { if(active) setUser(v) }).catch(e => { if(active) setError(e instanceof Error?e.message:'Unable to verify session') }).finally(()=>{if(active)setLoading(false)}); return ()=>{active=false} }, [])
  const value = useMemo<AuthState>(() => ({
    user, loading, error,
    login: async (input) => { const next = await authApi.login(input); setUser(next); setError(null) },
    logout: async () => { await authApi.logout(); setUser(null) },
  }), [user, loading, error])
  return <Context.Provider value={value}>{children}</Context.Provider>
}
export function useAuth(): AuthState { const v = useContext(Context); if(!v)throw new Error('AuthProvider missing'); return v }
