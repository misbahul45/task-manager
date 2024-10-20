import React from 'react'

interface Props {
    title:string,
    icon:React.ReactNode,
    className?:string
    actions:()=>void
}

const ButtonLogin = ({title, icon, className, actions}:Props) => {
  return (
    <form action={actions}>
      <button className={`flex gap-4 justify-center items-center w-full py-2 ${className} rounded-md`}>
        {icon} {title!=="logout"?
        <><span className='font-semibold'> Login with {title}</span></>
        :
        "Logout"}
      </button>
    </form>
  )
}

export default ButtonLogin
