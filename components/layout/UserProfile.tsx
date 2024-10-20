import React from 'react'
import Image from 'next/image'
import { FaCircleUser } from 'react-icons/fa6'
import Link from 'next/link'

interface Props{
    image:string,
    name:string
}
const UserProfile = ({image, name}:Props) => {
  return (
    <Link href={'/app'}>
      <div className="mx-auto relative size-12">
        {image?
            <Image src={image} alt={image} className='w-full h-full rounded-full object-cover' fill={true} priority={true} sizes='100%' />
            :
            <FaCircleUser className='w-full h-full text-slate-600' />
        }
      </div>
      <h1 className='text-center text-lg text-slate-700 font-extrabold'>{name}</h1>
    </Link>
  )
}

export default UserProfile
