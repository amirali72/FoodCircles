import { useParams } from "react-router-dom"; 
import Shimmer from "./Shimmer";
import Dishdata from "./Dishdata";
import useRestaurant from "../utils/useRestaurant";
import useMenu from "../utils/useMenu";
import RestCard from "./RestCard";

const RestMenu = () => {
    const {id} = useParams(); 

    const restaurant = useRestaurant(id);
    const dish = useMenu(id);

    console.log(restaurant);

    return (restaurant.length===0 || dish.length===0)? <Shimmer/>: (
        <>  <div className="flex-box">
                <RestCard {...restaurant}/>
                <div className="dish-card">
                        {dish.map((item)=>{
                            return <Dishdata {...item?.card?.info} key={item?.card?.info?.id}/>;
                        })}
                </div>
            </div>
        </>
    )
}

export default RestMenu;