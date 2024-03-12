import './App.css'

import { ShoeDetail } from './components/ShoeDetail'
import { Nav } from './components/Nav'
import { Card } from './components/Card'
import { SHOE_LIST } from './constant'


export function App() {

  return (
    <div className="p-10 animate-fadeIn4 xl:px-24">
      {/*  
      <Nav/>
      <ShoeDetail/>
      */}
      <Card item={SHOE_LIST[0]} />
    </div>
        
    
  )
}
