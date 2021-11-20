import React from 'react'
import "./content.css"
import tes1 from "./assests/tesla1.png"
import tes2 from "./assests/tesla2.png"
import tes3 from "./assests/tesla3.png"
import logo_red from "./assests/logo_red.svg"

function Content() {

function preview(any){
    document.getElementById("Tesla").src=any;
    console.log( any);
    if (any==="/static/media/tesla3.0586e7ec.png"){
        var yourImg = document.getElementById('Tesla');
        
        console.log("changed");

       
    }
    else{
        yourImg = document.getElementById('Tesla');
        yourImg.style.height = 'auto';
        yourImg.style.width = '600px';
    

    }
   

} function bgcolor(clr){
    if (clr==="red"){
        document.getElementsByClassName("App")[0].style.backgroundColor=clr;
      
        document.getElementById("logo").src="/static/media/logo_red.bc1ac6f8.svg";
        console.log(logo_red);

    }
    else{
        document.getElementsByClassName("App")[0].style.backgroundColor="black";
        document.getElementById("logo").src="/static/media/Tesla.329d9f43.svg";
    }
    


}


    return (
        <div className="text" id="text">
            
            <div className="textbox">
            <h2>Model S</h2>
            <p>
            The Model S Plaid is powered by a 1034PS tri-motor setup and offers a range of 627km on a single charge.
             It gets an all-wheel drivetrain and is capable of doing a <br></br>0-100kmph in 1.99 seconds and has a top speed of 322kmph. 
            </p>
            <div id="knw">
                <button>Know More</button>
            </div>
        </div> 
        <img src={tes1} alt="img" id="Tesla"></img> 
        <div className="imgbox">
           
                <li>
                <img id="tes1"src={tes1} alt="img"onClick={() => preview(tes1)}></img>
                </li>
  

                
                <li>
                <img id="tes3" src={tes3} alt="img"onClick={() => { preview("/static/media/tesla3.0586e7ec.png"); bgcolor("white") }}></img>
                </li>
            
                <li>
                <img id="tes2"src={tes2} alt="img"onClick={() =>{ preview("/static/media/tesla2.c2ea6cff.png"); bgcolor("red") }}></img>
                </li>
         
          
          
            
            
            </div> 
        </div>
        
    )
}

export default Content
