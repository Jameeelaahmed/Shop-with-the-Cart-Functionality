import './index.css'
import Header from './Components/Header/Header'
import Shop from './Components/Shopp/Shop'
import CartContextProvider from './Store/shopping-cart-context'
export default function App() {
    
    return(
        <CartContextProvider>
        <Header/>
        <Shop/>
        </CartContextProvider>
        )
}