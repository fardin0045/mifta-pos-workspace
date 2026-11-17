import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuth } from '../context/auth-context'
import { env } from '@/config/env'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
const schema = z.object({ email: z.email('Enter a valid email address'), password: z.string().min(8,'Password must be at least 8 characters') })
type FormValues=z.infer<typeof schema>
export function LoginPage() {
 const auth = useAuth(); const navigate = useNavigate(); const [serverError,setServerError]=useState('')
 const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm<FormValues>({resolver:zodResolver(schema)})
 async function submit(v:FormValues){try{setServerError('');await auth.login(v);await navigate({to:'/dashboard'})}catch(e){setServerError(e instanceof Error?e.message:'Sign in failed')}}
 return <main className="grid min-h-screen lg:grid-cols-[38%_62%]">
   <div className="flex min-h-52 flex-col justify-between bg-[#073754] p-10 text-white lg:min-h-screen"><div className="font-bold tracking-widest">MIFTA POS</div><div><h1 className="text-4xl font-bold">Welcome back.</h1><p className="mt-3 text-slate-200">Central restaurant management</p></div><div className="text-sm text-slate-300">Counter · Phone · Delivery · Collection</div></div>
   <div className="flex items-center justify-center bg-slate-50 p-6"><Card className="w-full max-w-md"><CardHeader><CardTitle>Sign in to the Admin Panel</CardTitle></CardHeader><CardContent><form onSubmit={handleSubmit(submit)} className="grid gap-5" noValidate>
     <label className="grid gap-1 text-sm">Email <Input type="email" autoComplete="username" {...register('email')}/>{errors.email&&<span className="text-red-600">{errors.email.message}</span>}</label>
     <label className="grid gap-1 text-sm">Password <Input type="password" autoComplete="current-password" {...register('password')}/>{errors.password&&<span className="text-red-600">{errors.password.message}</span>}</label>
     {serverError && <p role="alert" className="rounded bg-red-50 p-3 text-sm text-red-700">{serverError}</p>}
     <Button disabled={isSubmitting} type="submit">{isSubmitting?'Signing in…':'Sign in'}</Button>
     {env.mock&&<p className="rounded bg-amber-50 p-3 text-sm text-amber-900">Development demo only: admin@mifta.example / demo12345. This is not real authentication.</p>}
   </form></CardContent></Card></div>
 </main>
}
