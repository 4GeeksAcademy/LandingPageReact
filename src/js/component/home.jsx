import React from "react";
import Navbar from "./navbar.jsx"
import Container from "./container.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"

//create your first component
const Home = () => {

	let navbar = "Start Bootstrap";
	let home = "Home";
	let about = "About";
	let services = "Services";
	let contact = "Contact";

	let cardData = [
		{ url: "https://picsum.photos/id/237/400/200", title: "Card title", buttonLabel: "Find Out More!", buttonUrl: "", description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." },
		{ url: "https://picsum.photos/id/11/400/200", title: "Card title", buttonLabel: "Find Out More!", buttonUrl: "", description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." },
		{ url: "https://picsum.photos/id/28/400/200", title: "Card title", buttonLabel: "Find Out More!", buttonUrl: "", description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." },
		{ url: "https://picsum.photos/id/280/400/200", title: "Card title", buttonLabel: "Find Out More!", buttonUrl: "", description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." }
	]
	let containerData = [
		{ title: "A Warm Welcome!", description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", buttonLabel: "Call to action!" }
	]

	let footerData = [
		{ description: "My Website with React and Props" }
	]
	return (
		<>
			<Navbar navbar={navbar} home={home} about={about} services={services} contact={contact} />

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

			{footerData.length > 0 &&
				footerData.map((item, index) => {
					return (
						<Footer key={index} description={item.description} />
					)
				})
			}

		</>
	);
};

export default Home;
