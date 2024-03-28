import './Header.css'
import CartModal from '../CartModal/CartModal'
import { useRef,useContext} from 'react'

import { CartContext } from '../../Store/shopping-cart-context';
export default function Header() {

    const {items}=useContext(CartContext);
    const dialog=useRef();
    function handleOpenModal(){
    dialog.current.open();
    }

    let buttons=(<button>Close</button>)
    if(items.length>0){
    buttons=(
        <>
        <button>Close</button>
        <button>Checkout</button>
        </>
        )
    }
    return (
    <>
    <CartModal
    ref={dialog}
    actions={buttons}
    >
    </CartModal>
    <header id='main-header'>
        <div id='main-title'>
            <img src="logo.png" alt="" />
            <h1>Elegent Context</h1>
        </div>
        <button onClick={handleOpenModal}>Cart({items.length})</button>
    </header>
    </>
    )
}