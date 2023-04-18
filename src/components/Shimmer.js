import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeletons from './Skeleton';
import { Button } from "@mui/material";

const Shimmer = () => {
    return(
    <>
        <div className="search-area">
            <input type="search" placeholder="Search" />

            <Button style={{ backgroundColor: '#c0951e', color: "black" }} onClick={()=>{
                const data = filterData(searchInput, allRestuarants);
                setFilteredRestuarants(data);
            }}> Search </Button>

        </div>

        <div className="cards">
            <Skeletons/>
            <Skeletons/>
            <Skeletons/>
            <Skeletons/>
            <Skeletons/>
            <Skeletons/>
            <Skeletons/>
            <Skeletons/>
        </div>
    </>
    )
};

export default Shimmer;