import { useEffect, useState } from "react";
import CardData from "./CardData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { Button } from "@mui/material";


const Body = () =>{
    const [searchInput,setSearchInput] = useState("");
    const[allRestuarants, setAllRestuarants] = useState([]);
    const [filteredRestuarants, setFilteredRestuarants] = useState([]);

    useEffect(()=>{
        getRestuarants();
    },[]);

    async function getRestuarants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.861739&lng=80.9045064&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestuarants(json?.data?.cards[2]?.data?.data?.cards);
        setAllRestuarants(json?.data?.cards[2]?.data?.data?.cards);
    }

    const isOnline = useOnline();

    if(!isOnline) {
       return <h1> No Internet Connection 🔴</h1>;
    }
    if (!allRestuarants) return null;

    return (allRestuarants.length===0)?<Shimmer/> :(
        <>
        <div className="search-area">
            <input type="search" placeholder="Search" 
            value={searchInput}
            onChange={(e)=>{
                setSearchInput(e.target.value);
            }}/>

            <Button style={{ backgroundColor: '#c0951e', color: "black" }} onClick={()=>{
                const data = filterData(searchInput, allRestuarants);
                setFilteredRestuarants(data);
            }}> Search </Button>

        </div>
        <div className="cards">
            {   
                (filteredRestuarants.length===0)?<h1>Restuarant not Found...</h1>:
                filteredRestuarants.map((rest)=>{
                    return <Link to={"restaurant/"+rest.data.id}><CardData {...rest.data} key={rest.data.id}/>
                    </Link>
                })
            }
        </div>
        </>
    )
}

export default Body;