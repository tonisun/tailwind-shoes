import './App.css'

import { ShoeDetail } from './components/ShoeDetail'
import { Nav } from './components/Nav'
import { SHOE_LIST, CURRS } from './constant'
import { AllProducts } from './components/AllProducts'
import { ShoppingBag } from './components/ShoppingBag'
import { useState } from 'react'
import { Cart } from './components/Cart'


export function App() {

  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false)

  const FAKE_CART_ITEMS = SHOE_LIST.map(shoe => {
    
    return {
      product: shoe,
      qty: 1,
      size: 43,
      curr: CURRS[1], // €
    }
  })
  
  return (
    <div className="p-10 animate-fadeIn4 xl:px-24">

      
      {/**/}  
      <Nav onClickShoppingBtn={() => setIsShoppingBagOpen(true)} />
      
      <ShoeDetail curr={CURRS[1]} />
      
      <AllProducts items={SHOE_LIST} />
      
      <ShoppingBag isOpen={isShoppingBagOpen} onClickClose={() => setIsShoppingBagOpen(false)} >
        <Cart cartItems={FAKE_CART_ITEMS} />
      </ShoppingBag> 


      
    </div>
        
      
  )
}
