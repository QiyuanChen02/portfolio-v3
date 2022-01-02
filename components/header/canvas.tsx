import React, { useRef, useEffect } from "react";
import "./header.css";

type Velocity = {
    x: number; 
    y: number;
};

type IsParticle = {
    x: number;
    y: number;
    radius: number;
    velocity: Velocity;
    colour: string;
    draw(c: CanvasRenderingContext2D): void;
    update(width: number, height: number): void;
}

type CanvasProps = {
    width: number;
    height: number;
}

//Utility function
function randomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Colours
const colourPalette: string[] = [
    "hsl(29, 86%, 77%)",
    "hsl(7, 86%, 77%)",
    "hsl(311, 86%, 77%)",
    "hsl(266, 86%, 77%)",
    "hsl(226, 86%, 77%)"
]

//Particle info
const velocityEl = 1;
const minRadiusEl = 1;
const maxRadiusEl = 1;
const noParticlesEl = 20;

//Defines particle objects
class Particles{

    constructor(
        public radius: number,
        public x: number,
        public y: number,
        public velocity: Velocity,
        public colour: string,
    ){}

    //Draws particles
    draw(c: CanvasRenderingContext2D){
        
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        c.fillStyle = this.colour;
        c.fill();
        c.closePath();
        
    }

    //Updates position of particles
    update(width: number, height: number){
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        //Bounces particles off walls
        if (this.x - this.radius < 0 || this.x + this.radius > width){
            this.velocity.x = -1 * this.velocity.x;
            if (this.x - this.radius < 0){
                this.x = this.radius + 0.1;
            } else {
                this.x = width - this.radius - 0.1;
            }
        }

        if (this.y - this.radius < 0 || this.y + this.radius > height){
            this.velocity.y = -1 * this.velocity.y;
            if (this.y - this.radius < 0){
                this.y = this.radius + 0.1;
            } else {
                this.y = height - this.radius - 0.1;
            }
        } 
    }
}

const Canvas: React.FC<CanvasProps> = ({ width, height }) => {

    //Getting info for canvas
    const canvasRef = useRef<HTMLCanvasElement>(null);

    //Draws the canvas
    useEffect(() => {
        const canvas = canvasRef.current!;
        const c = canvas.getContext("2d")!;
        canvas.width = width;
        canvas.height = height;

        //Defines the initial conditions for the particles
        let particles: IsParticle[];
        function init(){
            particles = [];
            const numberParticles = noParticlesEl;

            //Sets the position of the particles, making sure they're not generated on top of each other
            for (let i = 0; i < numberParticles; i++){
                const radius = randomInteger(minRadiusEl, maxRadiusEl);
                const x = randomInteger(radius, width - radius);
                const y = randomInteger(radius, height - radius);

                const colour = colourPalette[Math.floor(Math.random() * colourPalette.length)];

                const velocity: Velocity = {
                    x: x > width/2 ? velocityEl : -velocityEl,
                    y: y > height/2 ? velocityEl : -velocityEl
                }
                const particle: IsParticle = new Particles(radius, x, y, velocity, colour);
                particles.push(particle); 
            }
        }
        
        let animationID: number;
        const animate = () => {
            animationID = requestAnimationFrame(animate);
            c.fillStyle = "rgba(42, 27, 61, 0.2)";
            c.fillRect(0, 0, width, height);
            for (var i = 0; i < particles.length; i++){
                particles[i].update(width, height);
                particles[i].draw(c);
            }
        }

        init();
        animate();

        return () => {
            cancelAnimationFrame(animationID);
        }

    }, [canvasRef, height, width]);

    return (
        <canvas ref={canvasRef}/>
    );
}

export default Canvas