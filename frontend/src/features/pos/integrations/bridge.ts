/** Interface for future authenticated local branch bridge. Not implemented in the frontend starter. */
export interface BranchBridge {
  printKitchenTicket(orderId: string): Promise<void>
  printReceipt(orderId: string): Promise<void>
  openCashDrawer(): Promise<void>
  status(): Promise<'CONNECTED' | 'DISCONNECTED'>
}
// Hardware protocols, device credentials, queue/retry logic belong to the branch-bridge service.
