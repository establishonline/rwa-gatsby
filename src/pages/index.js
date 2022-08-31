import React from "react";
import Layout from "../components/layout";

import Hero from "../components/home-hero";
import Services from "../components/home-services";
import About from "../components/home-about";
import Appointment from "../components/home-appointment";

const IndexPage = () => {
	return (
		<Layout pageTitle='Homepage'>
			<Hero />
			<Services />
			<About />
			<Appointment />
		</Layout>
	);
};

export default IndexPage;
