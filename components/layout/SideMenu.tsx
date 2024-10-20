'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaHome } from "react-icons/fa"
import { FaBellConcierge } from "react-icons/fa6"
import { MdChecklist, MdListAlt } from "react-icons/md"

const menuPathName=[
    {
        name:'All task',
        path:'/app',
        icon:<FaHome className="h-full" />
    },
    {
        name:'Important!',
        path:'/app/important',
        icon:<MdListAlt className="h-full" />
    },
    {
        name:'Completed!',
        path:'/app/completed',
        icon:<MdChecklist className="h-full" />
    },
    {
        name:'Do It Now',
        path:'/app/now',
        icon:<FaBellConcierge className="h-full" />
    }
]

const SideMenu = () => {
    const pathName=usePathname()
  return (
    <ul className="flex flex-col gap-2">
    {menuPathName.map((menuPath)=>(
        <li key={menuPath.name}>
            <Link href={menuPath.path} className={`flex gap-4 items-center font-bold py-1.5 px-6 border-2 border-cyan-500 rounded shadow-lg shadow-slate-700/30 hover:bg-cyan-500 hover:text-slate-100 transition-all duration-100 ${pathName===menuPath.path?"bg-cyan-500 text-slate-100":"text-slate-700"}`}>
                {menuPath.icon}
                <span>{menuPath.name}</span>
            </Link>
        </li>
    ))}
    </ul>
  )
}

export default SideMenu
