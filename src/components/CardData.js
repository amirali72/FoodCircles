import StarOutlineIcon from '@mui/icons-material/StarOutline';

const CardData = ({cloudinaryImageId,name,area,slaString,costForTwoString,cuisines}) => {
    return (
        <div className="card-item">
            <div className="flex">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+cloudinaryImageId}
            alt="rest-img"/>
            </div>

            <h2>{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            
            <div className="card-items-below">
                <p>{area}</p>
                <p>{slaString}</p>
                <p>{costForTwoString}</p>
            </div>
         </div>
    )
}

export default CardData;