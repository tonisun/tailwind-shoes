import './App.css'

import { ShoeDetail } from './components/ShoeDetail'
import { Nav } from './components/Nav'
import { SHOE_LIST, CURRS } from './constant'
import { AllProducts } from './components/AllProducts'
import { ShoppingBag } from './components/ShoppingBag'
import { useEffect, useState } from 'react'
import { Cart } from './components/Cart'

import {BiSun, BiMoon} from 'react-icons/bi'

const FAKE_CART_ITEMS = SHOE_LIST.map(shoe => {
    
    return {
      product: shoe,
      qty: 1,
      size: 43,
      curr: CURRS[1], // €
    }
})

export function App() {

  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false)

  /*  */
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[Math.floor(Math.random() * SHOE_LIST.length)]);


  useEffect(() => {
    
    const isDarkMode = localStorage.getItem('isDisDarkMode')
    
    if (isDarkMode === 'true'){
      window.document.documentElement.classList.add('dark')
    }
    
  }, [])

  const toggleDarkMode = () => {
    
    window.document.documentElement.classList.toggle('dark')
    
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains('dark')
    )
    
  }
  
  return (
    <div className="p-10 animate-fadeIn4 xl:px-24 dark:bg-night">

      
      {/**/}  
      <Nav onClickShoppingBtn={() => setIsShoppingBagOpen(true)} />
      
      <ShoeDetail shoe={currentShoe} curr={CURRS[1]}/>
      
      <AllProducts items={SHOE_LIST} />
      
      <ShoppingBag isOpen={isShoppingBagOpen} onClickClose={() => setIsShoppingBagOpen(false)} >
        <Cart cartItems={FAKE_CART_ITEMS} />
      </ShoppingBag> 

      <div className='fixed bottom-4 right-4'>
        <button onClick={toggleDarkMode} className='px-4 py-2 text-white rounded-full shadow-lg bg-night-50 dark:bg-white dark:text-black'>
          <BiSun size={21} className='hidden dark:block'/>
          <BiMoon size={21} className='dark:hidden'/>
        </button>
      </div>
      
    </div>
        
      
  )
}
