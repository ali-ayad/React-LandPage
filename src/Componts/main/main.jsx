import React from "react";
import './main.css'
import phoneimg from '../../Assets/img/portrait_black.png'
import backimg from '../../Assets/img/app-store-badge.svg'
import andimg from '../../Assets/img/google-play-badge.svg'

function Main(props) {
    return (
        <div className="main">
            <div className="col">
                <h1>{props.heading}</h1>
                <p>{props.heading2}</p>

                <div className="apps-btn">
                <a href="/#"><img className="img1" src={backimg} alt="" /></a>
                <a href="/#"><img className="img2" src={andimg} alt=""/></a>
            </div>

            </div>
            <div className="side-img">
                <video autoPlay loop muted>
                    <source src={require('../../Assets/img/demo-screen.mp4')} type="video/mp4" />
                </video>

                <img src={phoneimg} alt="" />

            </div>
           
        </div>
    )
}

export default Main;