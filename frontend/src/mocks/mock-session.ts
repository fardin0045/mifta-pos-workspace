import { demoUser } from './fixtures'
import type { User } from '@/domain/types'
let loggedIn = false
export const mockSession = {
  async me(): Promise<User | null> { return loggedIn ? demoUser : null },
  async login(input: { email: string; password: string }): Promise<User> {
    if (input.email === 'admin@mifta.example' && input.password === 'demo12345') { loggedIn = true; return demoUser }
    throw new Error('Invalid demo credentials')
  },
  async logout(): Promise<void> { loggedIn = false },
}
