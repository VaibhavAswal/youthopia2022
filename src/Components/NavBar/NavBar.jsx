import logo from "../../Images/navLogo.png";
import button from "../../Images/navBarButton.png";
import navMenu from "../../Images/navMenu.png";
import close from "../../Images/closeButton.png";
import "./NavBar.css";
import { useEffect, useState } from "react";

const NavBar = () => {
	//hiding navbar in home
	const [navVisible, setNavVisible] = useState("");
	const [navOpen, setNavOpen] = useState("");
	function showNavbar() {
		// When the scroll is greater than 50 viewport height, add the headerVisible class to the navbar tag
		if (this.scrollY >= 50) {
			setNavVisible("navHidden");
		} else {
			setNavVisible("");
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", showNavbar);
	}, []);

	return (
		<>
			<div className={`navbar ${navVisible}`}>
				<div className="navLeft">
					<img src={logo} alt="logo" />
				</div>
				<div className="navCenter">
					<p>Home</p>
					<p>Events</p>
					<p>Social Media</p>
					<p>Gallery</p>
					<p>About Us</p>
				</div>
				<div className="navRight">
					<img src={button} alt="" />
				</div>
				<div className="navMenu">
					<img
						src={navMenu}
						alt="menu"
						onClick={() => setNavOpen("navMenuOpenshow")}
					/>
				</div>
			</div>
			<div className={`nameMenuOpen ${navOpen}`}>
				<div className="navMenuCloseButton">
					<img src={close} alt="clsoeButton" onClick={() => setNavOpen("")} />
				</div>
				<div className="mobileMenu">
					<p className="active">Home</p>
					<p>Events</p>
					<p>Social Media</p>
					<p>Gallery</p>
					<p>About Us</p>
				</div>
			</div>
		</>
	);
};

export default NavBar;
