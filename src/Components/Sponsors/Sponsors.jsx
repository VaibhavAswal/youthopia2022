import burgerking from "../../Images/burgerking.png";
import starbucks from "../../Images/starbucks.png";
import dominos from "../../Images/dominos.png";
import mcdonalds from "../../Images/mcdonalds.png";

import "./Sponsors.css";

const Sponsors = () => {
	return (
		<div className="sponsors">
			<p>Our Sponsors</p>
			<div>
				<div>
					<img src={mcdonalds} alt="sponsers" />
				</div>
				<div>
					<img src={starbucks} alt="sponsers" />
				</div>
				<div>
					<img src={dominos} alt="sponsers" />
				</div>
				<div>
					<img src={burgerking} alt="sponsers" />
				</div>
			</div>
		</div>
	);
};

export default Sponsors;
