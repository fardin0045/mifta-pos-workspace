import { useResource } from '@/hooks/useResource'
import { ResourceTable, type Column } from './ResourceTable'
export function ResourceView<T extends object>({title,subtitle,load,columns}:{title:string;subtitle?:string;load:()=>Promise<T[]>;columns:Column<T>[]}){
 const {data,loading,error}=useResource(load)
 if(loading)return <p role="status" className="p-6">Loading {title.toLowerCase()}…</p>
 if(error)return <p role="alert" className="rounded bg-red-50 p-6 text-red-800">Could not load {title.toLowerCase()}: {error}</p>
 return <ResourceTable data={data??[]} columns={columns} title={title} subtitle={subtitle}/>
}
