import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";

function App() {
		let vh = window.innerHeight;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	
	return (
		<div className="App">
			<NavBar />
			<Home />
			<Footer/>
		</div>
	);
}

export default App;
