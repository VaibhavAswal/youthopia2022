        import React from "react";
        import "./Youthopiacomp.css"
        import imageS from "../../Images/imageS.png";
        import DITU from "../../Images/DITU.png";
        
        import Line from "../../Images/Line.png";
        import whitevariant from "../../Images/whitevariant.png";
        const Youthopiacomp =() =>
        {
            return(
<div className="main bg-[#001D25] ">
        <div className="container1 flex flex-row">
            <div className="left bg-[#001D25] ">
                <img className="w-96 h-96" src={imageS} alt="image not available"></img>
            </div>
            <div className="right bg-[#001D25]">
                <div className="class1">
                    <div className="class2 flex flex-row space-x-3">
                        <img className="whitevariant" src={whitevariant} alt="image not available"></img>
                        <img  className="Line " src={Line} alt="image not available"></img>
                        <img className="DITU" src={DITU} alt="image not available"></img>
                    </div>
                    <div>
                        <p className="text1">Surrender your typical, boring college life. Mark the dates because Youthopia'22 is making a comeback at DIT University. An annual techno-cultural event binds tech geeks and cultural artists in circumstances where talents will be uncovered, revealing entirely different euphoric.</p>
                    </div>
                    <div>
                        <br/> <p  className="text2">Read More.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
            )
        }

        export default Youthopiacomp;
