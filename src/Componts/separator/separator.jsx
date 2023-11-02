import React from "react";
import './separator.css'
import logo from'../../Assets/img/tnw-logo.svg'

function Separator() {
    return (
        <div className="background">
            <div>
                <div className="text">"An intuitive solution to a common problem that we all face, wrapped up in a single app!"</div>
                 <img src={logo} alt="" />
            </div>
           
        </div>
    );
}

export default Separator;