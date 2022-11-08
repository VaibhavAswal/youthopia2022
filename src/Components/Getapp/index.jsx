import React from "react";
import getapp from "../../Images/getapp.png"
import "./Getapp.css";
const Getapp = () =>{
    return(
        <div className="bg-[#001D25] maincontainer">
            <div >
                <img className="image" src={getapp} alt ="image not available"></img>
            </div>
        </div>
    )
}
export default Getapp;