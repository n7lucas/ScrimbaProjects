import React from "react";
import pic from "../assets/fotocurriculo.png"

function Profilepic () {
    return    (   
        <nav className="profileContainer">   
         <img src={pic}/>
         <h2>Lucas Mello</h2>
         <h4>FrontEnd Developer || Machine Learning </h4>
         <a className="webLink">https://github.com/n7lucas</a>
         </nav>   
   
)
}

export default Profilepic