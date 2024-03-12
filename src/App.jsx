import './App.css'

import { ShoeDetail } from './components/ShoeDetail'
import { Nav } from './components/Nav'
import { SHOE_LIST } from './constant'
import { AllProducts } from './components/AllProducts'


export function App() {

  return (
    <div className="p-10 animate-fadeIn4 xl:px-24">
      {/**/}  
      <Nav/>
      <ShoeDetail/>
      <AllProducts items={SHOE_LIST} />
    </div>
        
    
  )
}
