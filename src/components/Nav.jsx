import { TbShoppingBag } from "react-icons/tb"; 
import NikeLogo from '../assets/nike-logo.svg?react'
import {RxHamburgerMenu} from 'react-icons/rx'
import { useState } from "react";


const ROUTES = ['Home','About','Services','Pricing', 'Contact']

export function Nav ({onClickShoppingBtn}){

    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false)

  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between ">

        {/* Logo */}
        <a href="#">
            <NikeLogo className="w-20 h-20 dark:fill-white" />
        </a>

        {/* Hamburger Button */}
        <button onClick={()=>{setIsMobileMenuShown(!isMobileMenuShown)}} className='p-2 rounded-lg lg:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700'>
            <RxHamburgerMenu size={25}/>
        </button>

        {/* Menu List */}
        <div className={`${!isMobileMenuShown && "hidden"} w-full lg:block lg:w-auto`}>
            <ul className='flex flex-col p-4 text-lg text-left border border-gray-100 rounded cursor-pointer lg:space-x-8 lg:flex-row bg-gray-50 lg:bg-transparent lg:border-none lg:dark:text-white'>
                {ROUTES.map((route, i) => {
                    return <li className={`lg:hover:bg-transparent lg:hover:text-blue-500 rounded-lg py-2 px-3 ${i === 0 ?"bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"} ${(i==3 || i==4) && "lg:text-white"}`} key={route}>{route}</li>
                })}
            </ul>
        </div>

        {/* Shopping Bag Icon */}
        <div onClick={onClickShoppingBtn} className="fixed btn-press-anim bottom-4 left-4 lg:static lg:mr-8">
            <div className="w-12 h-12 p-2 bg-white rounded-full shadow-md cursor-pointer flex-center">
                <TbShoppingBag size={25}/>
            </div>
        </div>
    </nav>
  )
}
