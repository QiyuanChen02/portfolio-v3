import React from "react";

import Icons from "./icons";

const About: React.FC = () => {
	return (
		<section className="about" id="about">
			<h3>About me</h3>
			<p>
				I&apos;m Qiyuan Chen, a 21 year old student at Oxford University studying Maths and Computer Science.
				When I have some free time, I love using new web technologies to develop cool web applications. Through
				this, I have developed a variety of skills, including:
			</p>
			<Icons />
		</section>
	);
};

export default About;
