import { githubLoginAction, googleLoginAction } from '@/actions/auth.actions'
import ButtonLogin from '@/components/auth/ButtonLogin'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { auth } from '@/util/auth'
import { redirect } from 'next/navigation'
import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa6'

const page = async() => {
    const session=await auth()
  if (session?.user) return redirect('/app ')
  return (
    <main>
      <Header />
      <div className='h-[calc(100vh-6rem)] flex flex-col items-center justify-center'>
        <div className='w-full max-w-xs mx-auto px-4 py-4 rounded flex flex-col gap-4 shadow-xl shadow-slate-900/40 border-2 border-slate-400'>
            <h1 className='text-center text-slate-800 text-2xl font-bold'>Welcome</h1>
            <ButtonLogin actions={googleLoginAction} title='Google' icon={<FaGoogle />} className='bg-blue-700 text-slate-100 hover:bg-blue-800 transition-all duration-100' />
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default page
