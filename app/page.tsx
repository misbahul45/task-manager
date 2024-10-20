import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { auth } from '@/util/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {
  const session=await auth()
  if(session?.user){
    return redirect('/app')
  }
  return (
    <main>
      <Header />
      <div className='relative h-[calc(100vh-4rem)] flex flex-col bg-wave bg-cover '>
        <div className='flex-1 flex flex-col items-center justify-center'>
          <h1 className='animate-text text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-red-600 to-purple-800'>We Create The Best Tool</h1>
          <h2 className='mt-4 text-3xl font-semibold text-slate-100'>For Simplify Your Days By Creating Todos</h2>
          <p className="mt-4 text-lg text-slate-200 text-center max-w-xl">Simplify life for both you and your team. The world’s #1 task manager and to-do list app.</p>
          <Link href={'/app'} className='mt-8 px-4 py-3 rounded-md bg-blue-800 text-slate-100 shadow-xl shadow-slate-800/40 hover:bg-blue-900 hover:scale-105 transition-all duration-100'>Get Started</Link>
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default page
