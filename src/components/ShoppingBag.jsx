import { CgClose } from "react-icons/cg"; 


export function ShoppingBag({children, isOpen, onClickClose}){

    return (
        <div>
            {/* ShoppingBag */}
            <div className={` p-5 text-left fixed top-0 right-0 z-50 w-full h-full md:w-[50%] lg:w-[35%] bg-white transform transition duration-700 shadow-xl ${ isOpen ? 'translate-x-0' : 'translate-x-full' }`}>
                
                <button onClick={onClickClose} className="absolute p-2 font-bold right-4 top-4">
                    <CgClose className="w-6 h-6 rounded-full shadow-2xl btn-press-anim"/>
                </button>

            {children}

            </div>

            {/* Out of ShoppingBag */}
            {isOpen && (<div className={`overflow-y-auto fixed top-0 left-0 z-20 w-full h-full bg-black opacity-50`}/>)}
        </div>
    )
}

