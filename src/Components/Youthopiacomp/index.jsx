import React from "react";
import imageS from "../../Images/imageS.png";
import DITU from "../../Images/DITU.png";
import arrow from "../../Images/yArrow-right.png";
import "./Youthopiacomp.css";

import Line from "../../Images/Line.png";
import whitevariant from "../../Images/whitevariant.png";
const Youthopiacomp = () => {
	return (
		<div className="youthopiacomp">
			<div className="youthopiaContent">
				<div className="youthopiacompLeft">
					<img src={imageS} alt="youthopia"></img>
				</div>
				<div className="youthopiaRight">
					<div className="yRightTop">
						<img
							className="ywhitevariant"
							src={whitevariant}
							alt="youthopia"
						></img>
						<img className="yLine " src={Line} alt="youthopia"></img>
						<img className="yDITU" src={DITU} alt="youthopia"></img>
					</div>
					<div className="yRightMiddle">
						<p className="text1">
							Surrender your typical, boring college life. Mark the dates
							because Youthopia'22 is making a comeback at DIT University. An
							annual techno-cultural event binds tech geeks and cultural artists
							in circumstances where talents will be uncovered, revealing
							entirely different euphoric.
						</p>
					</div>
					<div className="yRightEnd">
						<p className="text2">Read More</p>
						<img src={arrow} alt="arrow" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Youthopiacomp;
