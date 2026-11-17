import { ResourceView } from '@/components/shared/ResourceView'
import type { AuditEntry } from '@/domain/types'
import { loadAudit } from '@/features/audit/api/audit.api'
import { ukDate } from '@/lib/format'
export function AuditPage() {
 return <ResourceView<AuditEntry> title="Audit Log" subtitle="Read-only audit history · Server writes must be immutable" load={loadAudit} columns={[
  { key:'occurredAt',label:'Occurred',render:v=>ukDate(String(v)) },{ key:'user',label:'User' },{ key:'branch',label:'Branch' },{ key:'action',label:'Action' },{ key:'target',label:'Target' }
 ]} />
}
