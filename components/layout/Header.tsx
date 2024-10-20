import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='h-16 w-full sticky top-0 left-0 bg-gradient-to-r from-violet-700 via-cyan-500 to-violet-700 shadow-xl shadow-slate-800/20'>
      <div className="mx-auto h-full w-full max-w-[70%] flex justify-between items-center">
        <Link href={'/'}><h1 className='text-2xl font-extrabold text-white'>Task Snick Tzy</h1></Link>
        <Link href={'/login'} className='px-8 py-1.5 bg-cyan-500 text-slate-100 rounded shadow-xl shadow-slate-900/30 ring-2 ring-cyan-400 font-semibold hover:scale-105 hover:bg-cyan-700 transition-all duration-100'>Login</Link>
      </div>
    </header>
  )
}

export default Header
