import React, { useEffect, useRef } from "react";

import Image from "next/image";
import { getIntersectionObserver, linkTo } from "../../usefulfunctions";

const Projects: React.FC = () => {
	const projectsRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const options = {
			threshold: 0.2,
			rootMargin: "0px 0px -20% 0px",
		};

		const observer = getIntersectionObserver(options);

		let allProjects: HTMLDivElement[];
		if (projectsRef.current) {
			const allProjects = projectsRef.current.querySelectorAll(".card");
			allProjects.forEach((project) => {
				observer.observe(project);
			});
		}

		return () => {
			allProjects.forEach((project) => {
				observer.unobserve(project);
			});
		};
	}, [projectsRef]);

	return (
		<section ref={projectsRef} className="projects" id="projects">
			<h3>Projects</h3>
			<Card
				imageSrc="/images/mychilltab.png"
				imageAlt="My Chill Tab"
				title="My Chill Tab"
				text="A productivity website with todo lists, pomodoro timers, chill sounds and much much more (currently in progress)"
				link="https://mychilltab.vercel.app/"
			/>
			<Card
				imageSrc="/images/greenplates.png"
				imageAlt="Greenplates"
				title="Greenplates"
				text="A website for sharing zero emission cars made for a client"
				link="https://greenplates.uk/"
				reverse
			/>
			<Card
				imageSrc="/images/collision-sim.png"
				imageAlt="Collision Simulator"
				title="Collision Simulator"
				text="A fun project to simulate Brownian Motion"
				link="http://collision-sim.netlify.app/"
			/>
		</section>
	);
};

type CardType = {
	imageSrc: string;
	imageAlt: string;
	title: string;
	text: string;
	link: string;
	reverse?: boolean;
};

const Card: React.FC<CardType> = ({ imageSrc, imageAlt, title, text, link, reverse = false }) => {
	return (
		<div className={`card ${reverse ? "reverse" : ""}`}>
			<div className="card-image">
				<Image src={imageSrc} layout="fill" alt={imageAlt} />
			</div>
			<div className="card-info">
				<h4>{title}</h4>
				<p>{text}</p>
				<div>
					<button data-location={link} onClick={linkTo}>
						View Project
					</button>
				</div>
			</div>
		</div>
	);
};

export default Projects;
