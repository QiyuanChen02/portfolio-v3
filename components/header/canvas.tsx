import React, { useRef, useEffect, useState } from "react";
import Settings, { SliderInfo } from "./settings";

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
};

type ParticleSettings = {
	velocityEl: number;
	minRadiusEl: number;
	maxRadiusEl: number;
	noParticlesEl: number;
};

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
	"hsl(226, 86%, 77%)",
];

//Defines particle objects
class Particles {
	constructor(
		public radius: number,
		public x: number,
		public y: number,
		public velocity: Velocity,
		public colour: string
	) { }

	//Draws particles
	draw(c: CanvasRenderingContext2D) {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
		c.fillStyle = this.colour;
		c.fill();
		c.closePath();
	}

	//Updates position of particles
	update(width: number, height: number) {
		this.x += this.velocity.x;
		this.y += this.velocity.y;

		//Bounces particles off walls
		if (this.x - this.radius < 0 || this.x + this.radius > width) {
			this.velocity.x = -1 * this.velocity.x;
			if (this.x - this.radius < 0) {
				this.x = this.radius + 0.1;
			} else {
				this.x = width - this.radius - 0.1;
			}
		}

		if (this.y - this.radius < 0 || this.y + this.radius > height) {
			this.velocity.y = -1 * this.velocity.y;
			if (this.y - this.radius < 0) {
				this.y = this.radius + 0.1;
			} else {
				this.y = height - this.radius - 0.1;
			}
		}
	}
}

const Canvas: React.FC = () => {
	//Getting info for canvas
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (canvasRef.current) {
			const canvas = canvasRef.current
			canvas.style.width = '100%';
			canvas.style.height = '100%';
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
		}
	}, [canvasRef])

	const [particleSettings, setParticleSettings] = useState<ParticleSettings>({
		velocityEl: 1,
		minRadiusEl: 1,
		maxRadiusEl: 1,
		noParticlesEl: 20,
	});

	const toggleParticleSettings = ({
		speed,
		size,
		sizerange,
		number,
	}: SliderInfo) => {
		setParticleSettings({
			velocityEl: speed,
			minRadiusEl: Math.max(size - Math.floor(sizerange / 2), 0),
			maxRadiusEl: size + Math.floor(sizerange + 1 / 2),
			noParticlesEl: number,
		});
	};

	//Draws the canvas
	useEffect(() => {
		const canvas = canvasRef.current!;
		const c = canvas.getContext("2d")!;

		const { velocityEl, minRadiusEl, maxRadiusEl, noParticlesEl } =
			particleSettings;

		//Defines the initial conditions for the particles
		let particles: IsParticle[];
		function init() {
			particles = [];
			const numberParticles = noParticlesEl;

			//Sets the position of the particles, making sure they're not generated on top of each other
			for (let i = 0; i < numberParticles; i++) {
				const radius = randomInteger(minRadiusEl, maxRadiusEl);
				const x = randomInteger(radius, canvas.width - radius);
				const y = randomInteger(radius, canvas.height - radius);

				const colour =
					colourPalette[
					Math.floor(Math.random() * colourPalette.length)
					];

				const velocity: Velocity = {
					x: x > canvas.width / 2 ? velocityEl : -velocityEl,
					y: y > canvas.height / 2 ? velocityEl : -velocityEl,
				};
				const particle: IsParticle = new Particles(
					radius,
					x,
					y,
					velocity,
					colour
				);
				particles.push(particle);
			}
		}

		let animationID: number;
		const animate = () => {
			animationID = requestAnimationFrame(animate);
			c.fillStyle = "rgba(42, 27, 61, 0.2)";
			c.fillRect(0, 0, canvas.width, canvas.height);
			for (var i = 0; i < particles.length; i++) {
				particles[i].update(canvas.width, canvas.height);
				particles[i].draw(c);
			}
		};

		init();
		animate();

		return () => {
			cancelAnimationFrame(animationID);
		};
	}, [canvasRef, particleSettings]);

	return (
		<>
			<Settings toggleParticleSettings={toggleParticleSettings} />
			<canvas ref={canvasRef} />
		</>
	);
};

export default Canvas;
