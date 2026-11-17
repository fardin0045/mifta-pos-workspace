import { env } from '@/config/env'

export class ApiError extends Error {
  constructor(public readonly status: number, message: string) { super(message); this.name = 'ApiError' }
}

export async function apiRequest<T>(path: string, init: RequestInit = {}): Promise<T> {
  const hasBody = init.body != null
  const headers = new Headers(init.headers)
  if (hasBody && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json')
  const res = await fetch(`${env.apiBaseUrl}${path}`, {
    ...init, headers, credentials: 'include',
  })
  if (!res.ok) {
    let message = `Request failed (${res.status})`
    try {
      const body: unknown = await res.json()
      if (body && typeof body === 'object' && 'message' in body && typeof body.message === 'string') message = body.message
    } catch { /* response was not JSON */ }
    throw new ApiError(res.status, message)
  }
  if (res.status === 204) return undefined as T
  return res.json() as Promise<T>
}
