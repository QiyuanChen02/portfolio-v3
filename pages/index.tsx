import type { NextPage } from "next";

import Header from "../components/header/header";
import Projects from "../components/projects/projects";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import ModalProvider from "../contexts/modalcontext";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div className="App">
			<Head>
				<link rel="icon" href="/images/favicon.svg" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta
					name="description"
					content="Qiyuan Chen - Web Developer"
				/>
				<title>Qiyuan Chen</title>
			</Head>
			<ModalProvider>
				<Header />
				<Projects />
				<About />
				<Footer />
				<Contact />
			</ModalProvider>
		</div>
	);
};

export default Home;
