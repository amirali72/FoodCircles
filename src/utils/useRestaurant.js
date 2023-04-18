import { useEffect, useState } from "react";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState([]);

    useEffect(()=>{
        getRestuarantInfo();
    },[]);

    async function getRestuarantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.861739&lng=80.9045064&restaurantId=" + id);

        const json = await data.json();
        
        setRestaurant(json.data.cards[0].card.card.info);
    }

    return restaurant;
}

export default useRestaurant;