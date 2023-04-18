import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userData : 0,
        }
    };

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/amirali72");
        const json = await data.json();
        // console.log(json);

        this.setState({
            userData : json,
        })
    }
    
    render(){
        console.log("Render" + this.props.name);
        return(
            <div className="about-box">
                <h2>Name : {this.state.userData.name}</h2>
                <img src={this.state.userData.avatar_url} alt="Image"/>
                <p>{this.state.userData.bio}</p>
                <h3>Location : {this.state.userData.location} </h3>
                <h3>GitHub Username : {this.state.userData.login} </h3>
                <h3><a href={this.state.userData.blog} target="new"> Amir Ali Portfolio</a></h3>
            </div>
        );
    }
}

export default Profile;