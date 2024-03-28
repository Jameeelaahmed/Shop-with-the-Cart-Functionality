import "./CartModal.css";
import Cart from "../Cartt/Cart";
import { useRef , useImperativeHandle ,forwardRef} from "react";
import { createPortal } from "react-dom";
const CartModal=forwardRef(function CartModal(
    {actions},ref
    ){
    const dialog=useRef();
    useImperativeHandle(ref,()=>({
        open:()=>{
            dialog.current.showModal();
        },
    }));
    return createPortal (
    <dialog ref={dialog} id="modal">
        <h2>Your Cart</h2>
        <Cart/>
        <form method="dialog">
            {actions}
        </form>
    </dialog>,document.getElementById('modal')
    );
})

export default CartModal;
