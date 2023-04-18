import React from "react";
import Profile from "./Profile";
import ProfileFunc from "./ProfileFunc";
import { Outlet } from "react-router-dom";

class About extends React.Component {

    render(){
        return (
            <div className="flex">
                <h1><u>ABOUT ME</u></h1>
                <ProfileFunc/>
            </div>
        )
    }
}

export default About;