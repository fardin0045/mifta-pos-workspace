export type Role = 'SUPER_ADMIN' | 'BRANCH_MANAGER' | 'CASHIER'
export type OrderChannel = 'COUNTER' | 'PHONE' | 'ONLINE'
export type Fulfilment = 'TAKEAWAY' | 'COLLECTION' | 'DELIVERY'
export type OrderStatus = 'OPEN' | 'PARKED' | 'PLACED' | 'READY' | 'OUT_FOR_DELIVERY' | 'COMPLETED' | 'CANCELLED' | 'VOIDED' | 'REFUNDED'
export type PaymentStatus = 'UNPAID' | 'PARTIAL' | 'PAID' | 'REFUNDED'
export interface User { id: string; name: string; email: string; role: Role; branchIds: string[] }
export interface Branch { id: string; code: string; name: string; postcode: string; city: string; telephone: string; active: boolean }
export interface Employee { id: string; staffCode: string; fullName: string; role: Role; branchIds: string[]; email: string; active: boolean }
export interface MenuType { id: string; name: string; menu: 'Menu' | 'Drink'; sortOrder: number; active: boolean }
export interface MenuItem {
  id: string; itemNumber: string; posName: string; fullName: string; kitchenName: string;
  typeId: string; vatRate: number; allergens: string[]; available: boolean;
  colour?: string; pricesPence: Record<OrderChannel, number | null>
}
export interface Customer { id: string; name: string; phone: string; postcode: string; address: string; blocked?: boolean; orderCount: number }
export interface OrderLine { id: string; itemId: string; name: string; quantity: number; unitPricePence: number; notes?: string }
export interface Order {
  id: string; orderNumber: string; branchId: string; channel: OrderChannel; fulfilment: Fulfilment;
  status: OrderStatus; paymentStatus: PaymentStatus; createdAt: string; customerName?: string;
  totalPence: number; lines: OrderLine[]
}
export interface AuditEntry { id: string; occurredAt: string; user: string; branch: string; action: string; target: string }
export interface ReportSummary { grossPence: number; orderCount: number; refundsPence: number; deliveryCount: number }
