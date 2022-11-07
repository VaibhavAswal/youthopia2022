import ditLogo from "../../Images/ditLogo.png";
import youthopia from "../../Images/youthopia.png";
import arrow from "../../Images/arrow-right.png";
import handLeft from "../../Images/handLeft.png";
import handRight from "../../Images/handRight.png";
import line from "../../Images/landingLine.png";
import qr from "../../Images/qrcode.png";

import "./Landing.css";

const Landing = () => {
	return (
		<div className="Landing">
			<img src={ditLogo} alt="landing" className="landingPageDitLogo" />
			<img src={youthopia} alt="landing" className="landingYouthopiaLogo" />
			<div className="landingDate">
				<p>17th-19th</p>
				<p>NOVEMBER 2022</p>
			</div>
			<div className="landingRegisterButton">
				<img src={arrow} alt="" />
				Register Now
			</div>
			<img src={line} alt="landing" className="landingLine" />
			<div className="handContainer">
				<img src={handLeft} alt="landing" className="handLeft" />
				<img src={handRight} alt="landing" className="handRight" />
			</div>
			<div className="landingRightCircle"></div>
			<div className="landingLeftCircle"></div>
			<img src={qr} alt="landing" className="qrcode" />
		</div>
	);
};

export default Landing;
