import { useDispatch } from "react-redux";
import { IMG_CDN } from "../config";
import { addItem, removeCart } from "../utils/cartSlice";
import { useState } from "react";
import Button from '@mui/material/Button';

const Dishdata = (items) => {

    const { name, description, price, imageId, ribbon } = items;
    const [btnval, setBtnVal] = useState(true);

    const dispatch = useDispatch();

    const addFoodItem = () => {
        dispatch(addItem(items));
        setBtnVal(false);
    }

    const removeFood = () => {
        dispatch(removeCart(items.id));
        setBtnVal(true);
    }

    return (
        <>
            <div className="dishes">
                <div className="left">
                    <img src={IMG_CDN + imageId} />
                </div>
                <div className="right">

                   
                    <div className="upper-data">
                        {!(ribbon.text === undefined) ? <h3>{name + "(" + ribbon.text + ")"} </h3> : <h3>{name}</h3>}
                            {(btnval === true) ? 
                            <Button style={{ color: "#695419", fontWeight:"bolder" }} onClick={() => addFoodItem(items)}>Add Item +</Button> : 
                            <Button style={{ color: "#695419", fontWeight:"bolder" }} onClick={() => removeFood(items)}>Remove Item -</Button>}
                    </div>
                    <h3>Rs {price / 100}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default Dishdata;