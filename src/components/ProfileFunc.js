import { useEffect, useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProfileFunc = () => {
    const [userData, setUserData] = useState({});

    const {name,avatar_url,bio,blog,html_url,location,login} = userData;

    useEffect(()=>{
        console.log("useEff");
        getUser();
    },[]);

    async function getUser(){
        const data = await fetch("https://api.github.com/users/amirali72");
        const json = await data.json();
        // console.log(json);
        setUserData(json);
    }
    return (
        <>
            <div className="about-box">
                {/* <img src={avatar_url} alt="Image"/> */}
                <h2> {name}</h2>
                <h3><LocationOnIcon/> : {location} </h3>
                <h3><GitHubIcon/> : {login} </h3>
                <h3><a href={blog} target="new"> Amir Ali Portfolio</a></h3>
                <h3><a href={html_url} target="new"> GitHub Link </a></h3>
            </div>

            <div className="about-page">
                <h2>Food Delivery Web App : </h2>
                <h3>This is a web application for food delivery created using ReactJS, Redux Toolkit, MaterialUI</h3>
                <h3>It uses swiggy public api to fetch the data and generate responses for restuarant cards and menus</h3>
                <h2>Features :</h2>
                <h3>Restuarant Card with details fetched from Swiggy API</h3>
                <h3>Menu with details fetched from Swiggy API</h3>
            </div>
        </>
    )
}

export default ProfileFunc;