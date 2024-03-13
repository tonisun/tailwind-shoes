import { CartCard } from "./CartCard";
import { CartItem } from "./CartItem";


export function ShoppingBagItem({item}){

    return(
        <div className="mb-11">
            {/*  
            <CartCard item={item}/>
            <div>{item.price} $</div>
            */}
            <CartItem item={item}/>
        </div>
    )
}