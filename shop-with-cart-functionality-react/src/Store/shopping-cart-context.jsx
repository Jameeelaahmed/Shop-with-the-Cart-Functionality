import { createContext } from "react";
import { DUMMY_PRODUCTS } from '../product'
import { useReducer} from 'react'
export const CartContext = createContext({
    items:[],
    updateCart:()=>{},
    updateItemQuantity:()=>{}
})

function shoppingCartReducer(state,action){
    if(action.type==='UPDATE_ITEM'){
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === action.payload.productID
        );
    
        const updatedItem = {
            ...updatedItems[updatedItemIndex],
        };
    
        updatedItem.quantity += action.payload.amount;
    
        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
        } else {
            updatedItems[updatedItemIndex] = updatedItem;
        }
    
        return {
            ...state,
            items: updatedItems,
        };
    }

    if(action.type==='ADD_ITEM'){
        const updatedItems=[...state.items];
    
        const existingCartItemIndex=updatedItems.findIndex((item)=>item.id===action.payload)

        const existingCartItem=updatedItems[existingCartItemIndex]

        if(existingCartItem){
            const updateItem={
            ...existingCartItem,
            quantity:existingCartItem.quantity+1,
            }
            updatedItems[existingCartItemIndex]=updateItem
        }else{
            const product=DUMMY_PRODUCTS.find((product)=>product.id===action.payload)
            updatedItems.push({
            id:action.payload ,
            title:product.title,
            price:product.price,
            quantity:1
            })
        }
        return {
            items:updatedItems
        }
    }
    return state

}
export default function CartContextProvider({children}){
    const [shoppingCartState,shoppingCartDispatch]=useReducer(
        shoppingCartReducer,
        {
            items:[]
        }
    );

    
    function handleAddToCart(id){
        shoppingCartDispatch({
            type:'ADD_ITEM',
            payload:id
        })
    }
    
    function onUpdateQuantity(id,value){
        shoppingCartDispatch({
            type:'UPDATE_ITEM',
            payload:{
                productID:id,
                amount:value
            }
        })
    }
    
    const ctxValue={
        items:shoppingCartState.items,
        updateCart:handleAddToCart,
        updateItemQuantity:onUpdateQuantity
    }

    return <CartContext.Provider value={ctxValue}>
        {children}
    </CartContext.Provider>
}