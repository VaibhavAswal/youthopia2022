import "./StarNight.css";
import Swiper from "../Swiper/SwiperComp";
import strip from "../../Images/starStrip.png";

function StarNight() {
	return (
		<div className="StarNight">
			<Swiper />
			<div className="startNightStrip">
				<img src={strip} alt="stip" />
				<img src={strip} alt="stip" />
				<img src={strip} alt="stip" />
				<img src={strip} alt="stip" />
				<img src={strip} alt="stip" />
				<img src={strip} alt="stip" />
				<img src={strip} alt="stip" />
				<img src={strip} alt="stip" />
				<img src={strip} alt="stip" />
				<img src={strip} alt="stip" />
				<img src={strip} alt="stip" />
				<img src={strip} alt="stip" />
			</div>
		</div>
	);
}

export default StarNight;
