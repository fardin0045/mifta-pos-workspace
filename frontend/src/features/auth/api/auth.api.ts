import { apiRequest, ApiError } from '@/lib/api/client'
import { env } from '@/config/env'
import { mockSession } from '@/mocks/mock-session'
import type { User } from '@/domain/types'

export type LoginInput = { email: string; password: string }
export const authApi = {
  async me(): Promise<User | null> {
    if (env.mock) return mockSession.me()
    try { const result = await apiRequest<{ user: User }>('/auth/me'); return result.user }
    catch (error) { if (error instanceof ApiError && error.status === 401) return null; throw error }
  },
  async login(input: LoginInput): Promise<User> {
    if (env.mock) return mockSession.login(input)
    const result = await apiRequest<{ user: User }>('/auth/login', { method: 'POST', body: JSON.stringify(input) })
    return result.user
  },
  async logout(): Promise<void> {
    if (env.mock) return mockSession.logout()
    return apiRequest<void>('/auth/logout', { method: 'POST' })
  },
}
