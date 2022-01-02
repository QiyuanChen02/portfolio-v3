import React, { useRef, useEffect } from "react";
import "./projects.css";

// @ts-ignore
import Tilt from 'react-tilt';

//Import collision simulator
import collisionSim from "./images/collision-sim.png";
import sendMeAThought from "./images/sendmeathought.png";

import { linkTo, getIntersectionObserver } from "../../usefulfunctions";

const Projects: React.FC = () => {
    const tiltOptions = {
        max: 10, 
        speed: 500, 
        scale: 1.05
    }

    const projectsRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const options = {
            threshold: 0.2,
            rootMargin: "0px 0px -20% 0px"
        };

        const observer = getIntersectionObserver(options);

        let allProjects: HTMLDivElement[];
        if (projectsRef.current) {
            const allProjects = projectsRef.current.querySelectorAll(".card");
            allProjects.forEach(project => {
                observer.observe(project);
            });
        }

        return () => {
            allProjects.forEach(project => {
                observer.unobserve(project);
            });
        }

    }, [projectsRef]);

    return (
        <section className="projects" id="projects" ref={projectsRef}>
            <h3>Projects</h3>
            <Tilt options={tiltOptions}>
                <div className="card"> 
                    <div className="card-image">
                        <img className="yesmyqueen" src={collisionSim} alt="Collision simulator" />
                    </div>
                    <div className="card-info">
                        <h4>Collision Simulator</h4>
                        <p>A fun project to simulate Brownian Motion</p>
                        <div>
                            <button data-location="http://collision-sim.netlify.app/" onClick={linkTo}>View Project</button>
                        </div>
                    </div>
                </div>
            </Tilt>
            <Tilt options={tiltOptions}>
                <div className="card reverse"> 
                    <div className="card-image">
                        <img className="yesmyqueen" src={sendMeAThought} alt="Send me a thought" />
                    </div>
                    <div className="card-info">
                        <h4>Send Me A Thought</h4>
                        <p>A site to let people reveal their thoughts anonymously</p>
                        <div>
                            <button data-location="https://sendmeathought.herokuapp.com/" onClick={linkTo}>View Project</button>
                        </div>
                    </div>
                </div>
            </Tilt>
        </section>
    );
}

export default Projects;