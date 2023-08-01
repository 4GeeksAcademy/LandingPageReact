import React from "react";
import Navbar from "./navbar.jsx"
import Container from "./container.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Container />
			<Card />
			<Footer />
		</>
	);
};

export default Home;
