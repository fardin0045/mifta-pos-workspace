/** NFR-06/07 design boundary. Real implementation needs IndexedDB, idempotent IDs, sync reconciliation, tests. */
export interface OfflineOrderEnvelope { clientOrderId: string; terminalId: string; branchId: string; payload: unknown; recordedAt: string }
export interface OfflineOrderQueue { enqueue(order: OfflineOrderEnvelope): Promise<void>; pending(): Promise<OfflineOrderEnvelope[]>; markSynced(clientOrderId: string): Promise<void> }
