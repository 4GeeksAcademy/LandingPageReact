import React from "react";
import Navbar from "./navbar.jsx"
import Container from "./container.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"

//create your first component
const Home = () => {
	let cardData = [
		{ url: "https://picsum.photos/id/237/400/200", title: "Title 1", buttonLabel: "label 1", buttonUrl: "", description: "Description 1" },
		{ url: "https://picsum.photos/id/11/400/200", title: "Title 2", buttonLabel: "label 2", buttonUrl: "", description: "Description 2" },
		{ url: "https://picsum.photos/id/28/400/200", title: "Title 3", buttonLabel: "label 3", buttonUrl: "", description: "Description 3" },
		{ url: "https://picsum.photos/id/280/400/200", title: "Title 4", buttonLabel: "label 4", buttonUrl: "", description: "Description 4" }
	]
	let containerData = [
		{ title: "Title 1", description: "Description 1", buttonLabel: "Label 1" }
	]
	return (
		<>
			<Navbar />
			{containerData.length > 0 &&
				containerData.map((item, index) => {
					return (
						<Container key={index} title={item.title} buttonLabel={item.buttonLabel} description={item.description} />
					)
				})
			}


			<div className="container mt-3">
				<div className="row">
					{cardData.length > 0 &&
						cardData.map((item, index) => {
							return (
								<Card key={index} image={item.url} title={item.title} buttonLabel={item.buttonLabel} buttonUrl={item.buttonUrl} description={item.description} />
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
