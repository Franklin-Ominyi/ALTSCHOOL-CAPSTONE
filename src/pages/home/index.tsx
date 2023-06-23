import React from "react";
import Landing from "./components/landing/index";
import WhyScissors from "./components/whyscissors";
import Stats from "./components/stats";
import Pricing from "./components/pricing";
import { Faqs } from "./components/faqs";
import Footer from "./components/footer";
import TrimUrl from "./components/trimurl";
import LinkOptimization from "./components/linkoptimization";
import Navbar from "../../components/navbar";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
	return (
		<div>
			<Helmet>
				<title>Home | Scissor | Developed by Franklin Alegu</title>
			</Helmet>
			<Navbar />
			<Landing />
			<Stats />
			<WhyScissors />
			<Pricing />
			<TrimUrl />
			<Faqs />
			<LinkOptimization />
			<Footer />
		</div>
	);
};

export default Home;
