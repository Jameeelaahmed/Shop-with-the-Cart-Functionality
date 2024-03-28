import './Product.css'
import { useContext } from 'react'
import { CartContext } from '../../Store/shopping-cart-context'
export default function Product({id,image,title,price,description}) {

    const {updateCart}=useContext(CartContext);
    return(
        <div className="product">
            <img src={image} alt="" />
            <div className='product-content'>
                <div>
                    <h3>{title}</h3>
                    <p className='product-price'>{price}</p>
                    <p>{description}</p>
                </div>
                <p className='product-actions'>
                    <button onClick={()=>updateCart(id)}>Add to Cart</button>
                </p>
            </div>
        </div>
    )
}