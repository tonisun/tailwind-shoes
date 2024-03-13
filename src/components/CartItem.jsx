import { CiTrash } from "react-icons/ci"; 
import { Select } from "./Select";
import { QTYS, SIZES } from '../constant'

export function CartItem({item: {product, qty, size, curr}}){

    return (
        <div className="cursor-pointer bg-gray-50 hover:bg-[#daffa2] space-y-2">
            {/* Product Box */}
            <div className="flex p-2 space-x-2">
                
                {/* Image */}
                <img className="h-24" src={product.src} alt={`${product.title}  Picture`}  />
                
                {/* Wrap Title & Description in block */}
                <div className="space-y-2">
                    <div className="font-bold">{product.title}</div>
                    <div className="text-sm text-gray-400">{product.description}</div>
                </div>
                
                {/* Price */}
                <div className="font-bold text-nowrap">{product.price} {curr.curr_symbol}</div>
            </div>

            {/* QTYS SIZE & TRASH BOX */}
            <div className="flex justify-between pb-2 pl-32">
                
                <div className="flex space-x-6">
                    <div className="">
                        <div className="font-bold">QTYs</div>
                        <Select 
                            defaultValue={qty} 
                            title="" 
                            options={QTYS} 
                            className={"w-16 p-1 pl-2"} 
                        />
                    </div>
                    <div className="">
                        <div className="font-bold">SIZE</div>
                        <Select 
                            defaultValue={size}  
                            title="" 
                            options={SIZES} 
                            className={"w-16 p-1 pl-2"} 
                        />
                    </div>
                </div>
                
                <button>
                    <CiTrash size={25} className="text-black"/>
                </button>
            </div>
        </div>
        
    )
}