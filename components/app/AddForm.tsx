'use client'
import React from 'react'
import { FaPencil } from 'react-icons/fa6'
import { MyContext } from './LayoutProvider'

const AddForm = () => {
    const { toggleForm }=React.useContext(MyContext)
  return (
    <div onClick={toggleForm} className='h-56 w-72 flex justify-center items-center border-dashed border-2 border-slate-700 rounded-lg cursor-pointer hover:border-solid hover:bborder-slate-900 transition-all duration-100 group'>
      <div className="size-7">
        <FaPencil className='w-full h-full' />
      </div>
      <span className='font-bold text-slate-500 text-lg group-hover:text-slate-700 transition-all duration-100'>Add New Task</span>
    </div>
  )
}

export default AddForm
