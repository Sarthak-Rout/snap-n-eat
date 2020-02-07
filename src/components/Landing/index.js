import React from "react"
import  Background from "../../assets/img/bg1.jpg"
import "./style.css"

class LandingPage extends React.Component {
    render ()  {
        return (
            <div className="landing">
                <button type="button" className="btn btn-light login-btn" >Smartwatch Login</button>
            </div>
            
        )
    }
}

export default LandingPage