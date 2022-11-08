import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../Images/starNight.png";
import logo from "../../Images/startNightLogo.png";

import "swiper/css";
import "swiper/css/navigation";

const SwiperComp = (props) => {
	return (
		<div className="swiperParent">
			<Swiper
				// install Swiper modules
				modules={[Navigation, Autoplay]}
				spaceBetween={50}
				autoplay
				loop={true}
				slidesPerView={1}
				navigation
			>
				<SwiperSlide>
					<img src={image} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image} alt="" />
				</SwiperSlide>
			</Swiper>
			<div className="swiperLogo">
				<img src={logo} alt="swiper logo" />
			</div>
		</div>
	);
};

export default SwiperComp;
