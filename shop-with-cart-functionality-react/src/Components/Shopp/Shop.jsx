import './Shop.css'
import   {DUMMY_PRODUCTS} from '../../product'
import Product from '../Product/Product'
export default function Shop() {
    return(
        <section id='shop'>
            <h2>ELEGANT CLOTHING FOR EVERYONE</h2>
            <ul id='products'>
                {
                DUMMY_PRODUCTS.map((product)=>{
                    return(
                    <li key={product.id}>
                        <Product
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        ></Product>
                    </li>
                    )
                })
                }
            </ul>
        </section>
    )
}