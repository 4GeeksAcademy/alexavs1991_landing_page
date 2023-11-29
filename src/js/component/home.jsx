import React from "react";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Jumbotron from "./Jumbotron.jsx"


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />

			<section className="container">

				<Jumbotron />


				<div className="row my-5">
					<Card />
					<Card />
					<Card />
					<Card />

					</div>
					</section>

					<Footer />
		</>
	);
};

export default Home;
