import { useEffect,useState } from 'react'
export function useResource<T>(load:()=>Promise<T>){
 const [data,setData]=useState<T|null>(null);const [error,setError]=useState<string|null>(null);const [loading,setLoading]=useState(true)
 useEffect(()=>{let active=true;load().then(v=>{if(active)setData(v)}).catch(e=>{if(active)setError(e instanceof Error?e.message:'Request failed')}).finally(()=>{if(active)setLoading(false)});return()=>{active=false}},[load])
 return {data,error,loading}
}
