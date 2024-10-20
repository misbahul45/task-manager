import FormPost from '@/components/app/FormPost'
import LayoutProvider from '@/components/app/LayoutProvider'
import Sidebar from '@/components/layout/Sidebar'
import { auth } from '@/util/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const layout = async({ children, }:{ children: React.ReactNode}) => {
    const session=await auth()
    if(!session?.user){
        return redirect('/login')
    }
  return (
    <section className='relative h-screen flex items-center gap-6 p-4'>
      <Sidebar />
      <LayoutProvider>
        <FormPost userId={session.user.id} />
        {children}
      </LayoutProvider>
    </section>
  )
}

export default layout
