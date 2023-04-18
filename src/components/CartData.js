import { useDispatch } from "react-redux";
import { IMG_CDN } from "../config";
import { removeCart } from "../utils/cartSlice";
import Button from '@mui/material/Button';

const CartData = (items) => {

    const {name, description, price, imageId, ribbon, id} = items;

    const dispatch = useDispatch();
    
    const removeFood = () => {
        dispatch(removeCart(items.id));
    }
    return(
        <>
            <div className="dishes">
                <div className="left">
                    <img src={IMG_CDN + imageId} />
                </div>
                <div className="right">

                   
                    <div className="upper-data">
                        {!(ribbon.text === undefined) ? <h3>{name + "(" + ribbon.text + ")"} </h3> : <h3>{name}</h3>}

                        <Button style={{ color: "#695419", fontWeight:"bolder" }}onClick={() => removeFood(items)}>Remove Item -</Button>
                    </div>
                    <h3>Rs {price / 100}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default CartData;