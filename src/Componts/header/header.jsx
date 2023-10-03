import React from "react";
import './header.css'

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <h2>Start Bootstrap</h2>
            </div>
             <div className="navigtion">
            <nav>
               
                    <ul>
                        <li href="#">Feature</li>
                        <li href="#">Download</li>
                    </ul>
               
                <div className="btn">
                    <button >Send Feedback</button>
                </div>
            </nav>
        </div>
 </div>
    )
}

export default Header;