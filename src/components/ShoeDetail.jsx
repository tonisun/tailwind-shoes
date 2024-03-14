import { useState } from 'react'
import nike1 from '../assets/n1-min.png'
import nike2 from '../assets/n2-min.png'
import nike3 from '../assets/n3-min.png'
import nike4 from '../assets/n4-min.png'

import { QTYS, SIZES } from '../constant'
import { Select } from './Select'

export function ShoeDetail({shoe, curr, onClickAdd}){
    /*
    const [size, setSize] = useState()    
    const [qty, setQty] = useState()    
    */

    const [form, setForm] = useState({qty:null, size:null})

    return (
        <div className="flex flex-col space-y-4 text-left lg:flex-row-reverse dark:text-white">

            {/* Image */}
            <div className="flex-1 lg:-mt-40 lg:ml-28">
                <div className='flex-center h-full bg-gradient-to-br from-[#f637cf] from-5% via-[#e3d876] via-30% to-[#4dd4c6]'>
                    <img className='animate-floatX' src={shoe.src} alt={`${shoe.src} Shoe`} />
                </div>
            </div>

            {/* Details */}
            <div className="flex-1 space-y-6">

                {/* Name Title */}
                <div className="text-5xl font-black md:text-9xl">
                    {shoe.title}
                </div>

                {/* Description */}
                <div className="font-medium md:text-xl">
                    {shoe.description}
                </div>

                {/* All in a Row div */}
                <div className='flex space-x-6'>
                    {/* Price */}
                    <div className="text-3xl font-extrabold md:text-6xl">
                        {shoe.price} {curr.curr_symbol}
                    </div>

                    {/* Select Quantity*/}
                    <Select 
                        value={form.qty} 
                        onChange={(qty) => setForm({...form, qty})} 
                        title={"QTY"} 
                        options={QTYS} />

                    {/* Select Size*/}
                    <Select 
                        value={form.size} 
                        onChange={(size) => setForm({...form, size})} 
                        title={"SIZE"} 
                        options={SIZES} />
                </div>


                <div className="space-x-10">

                    {/* Button */}
                    <button onClick={() => onClickAdd(shoe, form.qty, form.size)} className="text-white bg-black btn-press-anim h-14 w-44 hover:bg-gray-600 active:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-400">
                        Add to bag
                    </button>

                    {/* Link View Details */}
                    <a href="#" className="text-lg font-bold underline underline-offset-4">View details</a>

                </div>
            </div>
        </div>
    )
}

