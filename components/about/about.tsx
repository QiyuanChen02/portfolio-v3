import React from "react";
import "./about.css";

import Icons from "./icons";

const About: React.FC = () => {
    return (
        <section className="about" id="about">
            <h3>About me</h3>
            <p>I'm Qiyuan Chen, an 18 year old student going to Oxford University to study Maths and Computer Science. When I'm not busy with studies, I love using new web technologies to develop cool web applications. Through this, I have developed a variety of skills, including:</p>
            <Icons />
        </section>
    );
}

export default About;