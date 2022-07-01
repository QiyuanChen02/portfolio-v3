import React, { useEffect, useRef } from "react";

// @ts-ignore
import Tilt from "react-tilt";

import Image from "next/image";
import { getIntersectionObserver, linkTo } from "../../usefulfunctions";

const Projects: React.FC = () => {
	const tiltOptions = {
		max: 10,
		speed: 500,
		scale: 1.05,
	};

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
		<section className="projects" id="projects" ref={projectsRef}>
			<h3>Projects</h3>
			<Tilt options={tiltOptions}>
				<div className="card">
					<div className="card-image">
						<Image
							className="yesmyqueen"
							src="/images/collision-sim.png"
							layout="fill"
							alt="Collision simulator"
						/>
					</div>
					<div className="card-info">
						<h4>Collision Simulator</h4>
						<p>A fun project to simulate Brownian Motion</p>
						<div>
							<button
								data-location="http://collision-sim.netlify.app/"
								onClick={linkTo}>
								View Project
							</button>
						</div>
					</div>
				</div>
			</Tilt>
			<Tilt options={tiltOptions}>
				<div className="card reverse">
					<div className="card-image">
						<Image
							className="yesmyqueen"
							src="/images/extraemily.png"
							layout="fill"
							alt="Extra Emily's website link"
						/>
					</div>
					<div className="card-info">
						<h4>ExtraEmily&apos;s Website</h4>
						<p>
							A site I made for a popular Twitch streamer to link to her socials
						</p>
						<div>
							<button
								data-location="https://extraemily.vercel.app/"
								onClick={linkTo}>
								View Project
							</button>
						</div>
					</div>
				</div>
			</Tilt>
			<Tilt options={tiltOptions}>
				<div className="card">
					<div className="card-image">
						<Image
							className="yesmyqueen"
							src="/images/fastchat.png"
							layout="fill"
							alt="Collision simulator"
						/>
					</div>
					<div className="card-info">
						<h4>Fast Chat</h4>
						<p>
							Match with an anonymous person and start chatting
						</p>
						<div>
							<button
								data-location="https://fastchat.app/"
								onClick={linkTo}>
								View Project
							</button>
						</div>
					</div>
				</div>
			</Tilt>
		</section>
	);
};

export default Projects;
