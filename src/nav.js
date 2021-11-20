import React from 'react'
import Tesla from "./assests/Tesla.svg"
import "./nav.css"

function Nav() {
    return (

        <div className="head">
        <div className="Tesla">
            <img id="logo" src={Tesla}/></div>
        <nav>
             <li className="linky"><a href="#">Home</a></li>
             <li><a href="#" id="linky">Products</a></li>
             <li><a href="#">What's New</a></li>
             <li><a href="#">Contact</a></li>
                
          
        </nav>
        </div>
    )
}

export default Nav
