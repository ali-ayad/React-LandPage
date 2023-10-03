import React from "react";
import './main.css'
import phoneimg from '../img/portrait_black.png'
import backimg from '../img/app-store-badge.svg'
import andimg from '../img/google-play-badge.svg'

function Main() {
    return (
        <div className="main">
            <div className="col">
                <h1>Showcase your app beautifully.</h1>
                <p>Launch your mobile app landing page faster with this free, open source theme from Start Bootstrap!</p>

                <div className="apps-btn">
                <a><img className="img1" src={backimg} alt="" /></a>
                <a><img className="img2" src={andimg} alt="" /></a>
            </div>

            </div>
            <div className="side-img">
                <video autoPlay loop muted>
                    <source src={require('../img/demo-screen.mp4')} type="video/mp4" />
                </video>

                <img src={phoneimg} alt="" />

            </div>
           
        </div>
    )
}

export default Main;