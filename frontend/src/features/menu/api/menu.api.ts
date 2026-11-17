import { getResource } from '@/lib/api/resource.api'
/** Backend endpoint contract proposed in docs/API_CONTRACT.md. */
export const loadMenu = () => getResource('menu/items')
