import { useDispatch, useSelector } from "react-redux";
import CartData from "./CartData";
import { clearCart } from "../utils/cartSlice";
import Button from '@mui/material/Button';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    
    const dispatch = useDispatch();

    const clearCartData = () => {
        dispatch(clearCart())
    }

    return (
        
        <div className="flex">
            <h1>Cart Items - {cartItems.length}</h1>
            
            <Button variant="outlined" color="error" onClick={()=>clearCartData()}>Clear Cart</Button>

            {cartItems.map((item)=>(
                <CartData {...item} key={item.id}/>
            ))}
        </div>
    )
}

export default Cart;