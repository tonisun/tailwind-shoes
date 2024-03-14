import './App.css'

import { ShoeDetail } from './components/ShoeDetail'
import { Nav } from './components/Nav'
import { SHOE_LIST, CURRS } from './constant'
import { AllProducts } from './components/AllProducts'
import { ShoppingBag } from './components/ShoppingBag'
import { useEffect, useState } from 'react'
import { Cart } from './components/Cart'

import {BiSun, BiMoon} from 'react-icons/bi'

export function App() {

  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false)

  // Zustand initialisieren mit einem zufälligen Schuh oder dem zuletzt gespeicherten Schuh
  const [currentShoe, setCurrentShoe] = useState(() => {
    const savedShoe = localStorage.getItem('lastSelectedShoe')
    return SHOE_LIST[Math.floor(Math.random() * SHOE_LIST.length)] || savedShoe
  })

  const [cartItems, setCartItems] = useState([])

  console.log('***', cartItems)

  // Bei jeder Änderung von currentShoe, speichere den neuen Schuh
  useEffect(() => {
    localStorage.setItem('lastSelectedShoe', currentShoe);
  }, [currentShoe])


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
  
  const addToCart = (product, qty, size) => {
    if (qty && size){
      const updatedCartItems = [...cartItems]
      const existingItemIndex = cartItems.findIndex(item => item.product.id === product.id)
      if(existingItemIndex > -1){
        updatedCartItems[existingItemIndex].qty = qty
        updatedCartItems[existingItemIndex].size = size
      } else {
        updatedCartItems.push({product, qty, size})
      }

      setCartItems(updatedCartItems)
    }
  }
  
  return (
    <div className="p-10 animate-fadeIn4 xl:px-24 dark:bg-night">

      
      {/* */}  
      <Nav onClickShoppingBtn={() => setIsShoppingBagOpen(true)} />
      
      <ShoeDetail shoe={currentShoe} curr={CURRS[1]} onClickAdd={addToCart} />
      
      <AllProducts items={SHOE_LIST} onClickCard={setCurrentShoe} />
      
      <ShoppingBag isOpen={isShoppingBagOpen} onClickClose={() => setIsShoppingBagOpen(false)} >
        <Cart cartItems={cartItems} curr={CURRS[1]} />
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
