import { CartItem } from "./CartItem";


export function Cart({cartItems, curr}) {

    return(

        <div>
            <h2 className='mb-10 text-4xl font-bold dark:text-white'>Cart</h2>
            <ul className="space-y-5">
                {cartItems.map(cartItem =>
                    <li key={cartItem.product.id}>
                        <CartItem item={cartItem} curr={curr} />
                    </li>
                )}
            </ul>
        </div>
    )
}