import icon from "../../Images/gplay.png";
import app from "../../Images/appss.png";
import "./Getapp.css";
const Getapp = () => {
	return (
		<div className="getApp">
			<div className="getAppContentB">
				<div className="getAppContent">
					<p className="title">Get App</p>
					<p className="desc">
						A fest is totally incomplete without the the event which appreciates
						our techy side.
					</p>
					<p className="downloadText">Download App</p>
					<img src={icon} alt="googlePlay" />
				</div>
				<img src={app} alt="app" className="getAppContentSS" />
			</div>
		</div>
	);
};
export default Getapp;
