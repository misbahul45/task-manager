import { auth } from '@/util/auth'
import React from 'react'
import UserProfile from './UserProfile'
import SideMenu from './SideMenu'
import ButtonLogin from '../auth/ButtonLogin'
import { MdLogout } from 'react-icons/md'
import { logoutAction } from '@/actions/auth.actions'


const Sidebar = async() => {
    const session=await auth()
    const user = session?.user as User | undefined; 
    const image = user?.image || '';
    const name = user?.name || '';

  return (
    <aside className='w-56 h-full bg-slate-200 shadow-xl shadow-slate-800/40 rounded-lg flex flex-col justify-between px-2 py-6'>
        <UserProfile image={image} name={name} />
        <SideMenu />
        <ButtonLogin actions={logoutAction} title='logout' icon={<MdLogout className='h-full group-hover:translate-x-2 transition-all duration-100' />} className='bg-red-600 text-slate-100 hover:bg-red-700 transition-all duration-75 font-semibold group' />
    </aside>
  )
}

export default Sidebar
