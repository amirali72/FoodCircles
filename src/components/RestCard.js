import { IMG_CDN } from "../config";
import { useParams } from "react-router-dom";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const RestCard = ({city,name,areaName,sla,cloudinaryImageId,cuisines,costForTwoMessage,avgRating,totalRatingsString,avgRatingString}) => {
    const {id} = useParams(); 
  return (
    <div className="menu-card">
      <p>
        {id} : {city}
      </p>
      <h1>{name}</h1>
      <p>{areaName + " , " + sla?.lastMileTravelString}</p>
      <img src={IMG_CDN + cloudinaryImageId} />
      <h4>{"Cuisines: " + cuisines?.join(", ")}</h4>
      <h4>{"Cost: " + costForTwoMessage}</h4>
      <h5>{"Rating: " + avgRating + " stars"}</h5>
      <h5>{totalRatingsString}</h5>
      <div className="rating">
        <h5>{avgRatingString} </h5>
        <StarBorderIcon/>
      </div>
    </div>
  );
};

export default RestCard;
