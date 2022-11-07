import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";

function App() {
	window.addEventListener("load", function () {
		let vh = window.innerHeight;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	});
	window.addEventListener("resize", function () {
		let vh = window.innerHeight;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	});
	return (
		<div className="App">
			<NavBar />
			<Home />
		</div>
	);
}

export default App;
