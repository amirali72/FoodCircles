import { useEffect, useState } from "react";

const useMenu = (id) => {

    const [dish, setDish] = useState([]);

    useEffect(()=>{
        getRestuarantInfo();
    },[]);

    async function getRestuarantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.861739&lng=80.9045064&restaurantId=" + id);

        const json = await data.json();
        
        setDish(Object.values(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card)[2]);
    }

    return dish;
}

export default useMenu;