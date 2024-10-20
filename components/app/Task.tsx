'use client'
import { completedTaskAction, deleteTaskAction } from '@/actions/task.actions'
import React, { useContext } from 'react'
import { MdDelete } from 'react-icons/md'
import { RxUpdate } from 'react-icons/rx'
import { MyContext } from './LayoutProvider'

interface Props extends Task{}


const Task = ({ title, desc, completed, important, date, id, ...props }:Props) => {
  const { taskUpdateData, toggleForm }=useContext(MyContext)
  const handleDelete=async()=>{
    await deleteTaskAction(id)
  }
  const handleCompeleted=async()=>{
    await completedTaskAction(id, completed)
  }
  const handleUpdateTaskData=()=>{
    taskUpdateData({id, title, desc, completed, important, date, ...props})
    toggleForm()
  }
  return (
    <div className={`flex flex-col justify-between h-56 w-72 border-2 rounded-lg p-4 shadow-xl shadow-slate-800/50 ${completed?"border-yellow-600":important?"border-red-600":"border-cyan-600"}`}>
      <div>
        <h1 className='text-xl font-semibold'>{title}</h1>
        <p className='text-[16px] mt-2'>{desc.length > 100 ?
          <>
            {desc?.substring(0, 100) + "..."}
            <button className='text-blue-500 hover:text-blue-700 transition-all duration-100'><small>read more</small></button>
          </> : desc ?? ""}</p>
      </div>
      <div>
        <small>{date}</small>
        <div className="flex justify-between items-center">
          <button onClick={handleCompeleted} className={`px-4 py-2 rounded-full text-slate-100 font-semibold ${completed?"bg-yellow-600":"bg-blue-600"}`}>{completed?"Completed":"Incompleted"}</button>
          <div className="flex items-center gap-2">
            <button onClick={handleDelete} className='text-2xl'>
              <MdDelete className='w-full h-full text-slate-700' />
            </button>
            <button onClick={handleUpdateTaskData} className='text-2xl'>
              <RxUpdate className='w-full h-full text-slate-700' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task
