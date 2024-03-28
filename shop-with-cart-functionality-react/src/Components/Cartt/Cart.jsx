import './Cart.css'

import { useContext } from 'react';
import { CartContext } from '../../Store/shopping-cart-context'
export default function Cart() {

    const {items, updateItemQuantity}= useContext(CartContext)
    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
    
    return(
        <div id="cart">
            {items.length===0 && <p>No items in cart!</p>}
            {items.length>0 && (
                <ul id="cart-items">
                    {items.map((item) => (
                        <li key={item.id}>
                            <div>
                                <span>{item.title}</span>
                                <span>${item.price.toFixed(2)}</span>
                            </div>
                            <div className='cart-item-actions'>
                                <button onClick={() => updateItemQuantity(item.id, -1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateItemQuantity(item.id, 1)}>+</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <p id='cart-total-price'>
                Cart Total:<strong>{formattedTotalPrice}</strong>
            </p>
        </div>
    )
}