import { TbShoppingBag } from "react-icons/tb"; 
import NikeLogo from '../assets/nike-logo.svg?react'
import {RxHamburgerMenu} from 'react-icons/rx'
import { useState } from "react";


const ROUTES = ['Home','About','Services','Pricing', 'Contact']

export function Nav (){

    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false)

  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between ">

        {/* Logo */}
        <a href="#">
            <NikeLogo className="h-20 w-20" />
        </a>

        {/* Hamburger Button */}
        <button onClick={()=>{setIsMobileMenuShown(!isMobileMenuShown)}} className='lg:hidden hover:bg-gray-100 p-2 focus:ring-2 focus:ring-gray-200 rounded-lg'>
            <RxHamburgerMenu size={25}/>
        </button>

        {/* Menu List */}
        <div className={`${!isMobileMenuShown && "hidden"} w-full lg:block lg:w-auto`}>
            <ul className='lg:space-x-8 flex flex-col lg:flex-row p-4 cursor-pointer bg-gray-50 text-lg border lg:bg-transparent border-gray-100 rounded lg:border-none text-left'>
                {ROUTES.map((route, i) => {
                    return <li className={`lg:hover:bg-transparent lg:hover:text-blue-500 rounded-lg py-2 px-3 ${i === 0 ?"bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"} ${(i==3 || i==4) && "lg:text-white"}`} key={route}>{route}</li>
                })}
            </ul>
        </div>

        {/* Shopping Bag Icon */}
        <div className="fixed bottom-4 left-4 lg:static lg:mr-8">
            <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md p-2 cursor-pointer">
                <TbShoppingBag size={25}/>
            </div>
        </div>
    </nav>
  )
}
