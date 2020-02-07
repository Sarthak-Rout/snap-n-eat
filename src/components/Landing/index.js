import React from "react"
import  Logo from "../../assets/img/logo.png"
import "./style.css"

class LandingPage extends React.Component {
    render ()  {
        return (
            <div className="landing">
                <img src={Logo} alt="logo" height="260px" width="250px"></img>
                <button type="button" className="btn btn-light login-btn" >SMARTWATCH LOGIN</button>
            </div>
            
        )
    }
}

export default LandingPage