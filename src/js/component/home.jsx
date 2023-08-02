import React from "react";
import Navbar from "./navbar.jsx"
import Container from "./container.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"

//create your first component
const Home = () => {
	let imagescard = [
		"https://picsum.photos/id/237/400/200",
		"https://picsum.photos/id/11/400/200",
		"https://picsum.photos/id/28/400/200",
		"https://picsum.photos/id/280/400/200"
	]

	return (
		<>
			<Navbar />
			<Container />
			<div className="container mt-3">
				<div className="row">
					{imagescard.length > 0 &&
						imagescard.map((imgcrd, index) => {
							return (
								<Card imgcrd={imgcrd} key={index} />
							)
						})
					}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
