/** All VITE_* variables are PUBLIC build-time values. Never put secrets here. */
export const env = {
  apiBaseUrl: (import.meta.env.VITE_API_BASE_URL || '/api/v1').replace(/\/$/, ''),
  /** Mock mode is deliberately unavailable in production builds. */
  mock: import.meta.env.DEV && import.meta.env.VITE_USE_MOCK_API === 'true',
}
