import React, { useEffect, useRef } from "react";

import { getIntersectionObserver } from "../../usefulfunctions";

const Icons: React.FC = () => {
	const iconsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const options = {
			threshold: 0.8,
			rootMargin: "0px 0px -10% 0px",
		};

		const observer = getIntersectionObserver(options);

		let allLogos: HTMLDivElement[];
		if (iconsRef.current) {
			const allLogos = iconsRef.current.querySelectorAll("div");
			allLogos.forEach((logo) => {
				observer.observe(logo);
			});
		}

		return () => {
			allLogos.forEach((logo) => {
				observer.unobserve(logo);
			});
		};
	}, [iconsRef]);

	return (
		<div className="icons" ref={iconsRef}>
			<div className="html-logo">
				<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53199999999998">
					<path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e34f26" />
					<path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ef652a" />
					<path
						d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
						fill="#fff"
					/>
				</svg>
				<p>HTML</p>
			</div>
			<div className="css-logo">
				<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53">
					<path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba" />
					<path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7" />
					<path
						d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
						fill="#fff"
					/>
				</svg>
				<p>CSS</p>
			</div>
			<div className="js-logo">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1052 1052">
					<path fill="#f0db4f" d="M0 0h1052v1052H0z" />
					<path
						d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
						fill="#323330"
					/>
				</svg>
				<p>JavaScript</p>
			</div>
			<div className="ts-logo">
				<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 200V0h400v400H0" fill="#007acc" />
					<path
						d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"
						fill="#fff"
					/>
				</svg>
				<p>TypeScript</p>
			</div>
			<div className="react-logo">
				<svg viewBox="175.7 78 490.6 436.9" xmlns="http://www.w3.org/2000/svg">
					<g fill="#61dafb">
						<path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
						<circle cx="420.9" cy="296.5" r="45.7" />
					</g>
				</svg>
				<p>React.js</p>
			</div>
			<div className="nodejs-logo">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109 122.88">
					<style type="text/css"></style>
					<g>
						<path
							d="M68.43,87.08c-19.7,0-23.83-9.04-23.83-16.63c0-0.72,0.58-1.3,1.3-1.3h5.82c0.64,0,1.18,0.47,1.28,1.1 c0.88,5.93,3.49,8.92,15.41,8.92c9.49,0,13.52-2.14,13.52-7.18c0-2.9-1.15-5.05-15.89-6.49c-12.33-1.22-19.95-3.93-19.95-13.8 c0-9.08,7.66-14.49,20.5-14.49c14.42,0,21.56,5,22.46,15.76c0.03,0.37-0.1,0.73-0.35,1c-0.25,0.26-0.6,0.42-0.96,0.42H81.9 c-0.61,0-1.14-0.43-1.26-1.01c-1.41-6.23-4.81-8.23-14.07-8.23c-10.36,0-11.56,3.61-11.56,6.31c0,3.28,1.42,4.24,15.4,6.09 c13.84,1.84,20.41,4.43,20.41,14.16c0,9.81-8.18,15.43-22.45,15.43L68.43,87.08L68.43,87.08z M54.52,122.88 c-1.65,0-3.28-0.43-4.72-1.26l-15.03-8.9c-2.25-1.26-1.15-1.7-0.41-1.96c2.99-1.05,3.6-1.28,6.8-3.1c0.34-0.19,0.78-0.12,1.12,0.08 l11.55,6.85c0.42,0.23,1.01,0.23,1.4,0l45.03-25.99c0.42-0.24,0.69-0.72,0.69-1.22V35.43c0-0.52-0.27-0.98-0.7-1.24L55.23,8.22 c-0.42-0.25-0.97-0.25-1.39,0l-45,25.97c-0.44,0.25-0.71,0.73-0.71,1.23v51.96c0,0.5,0.27,0.97,0.7,1.21l12.33,7.12 c6.69,3.35,10.79-0.6,10.79-4.56V39.86c0-0.73,0.57-1.3,1.31-1.3l5.7,0c0.71,0,1.3,0.56,1.3,1.3v51.31 c0,8.93-4.87,14.05-13.33,14.05c-2.6,0-4.66,0-10.38-2.82L4.72,95.59C1.8,93.9,0,90.75,0,87.38V35.42c0-3.38,1.8-6.54,4.72-8.21 l45.07-26c2.85-1.61,6.64-1.61,9.47,0l45.02,26.01c2.91,1.68,4.72,4.82,4.72,8.21v51.96c0,3.37-1.81,6.51-4.72,8.21l-45.02,26 c-1.44,0.83-3.08,1.26-4.74,1.26L54.52,122.88L54.52,122.88z M54.52,122.88L54.52,122.88L54.52,122.88L54.52,122.88z"
							fill="#55a345"
						/>
					</g>
				</svg>
				<p>Node.js</p>
			</div>
			<div className="nextjs-logo">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 506.68 306.34">
					<path d="M119.55,79.9h95.57v7.61H128.31V144.8h81.63v7.61H128.31v62.9h87.8v7.62H119.55Zm104.13,0h10.15l45,62.9,46-62.9L387.37,0,284.6,149.41l53,73.52H327L278.83,156l-48.38,66.91H220.1l53.35-73.52L223.68,79.9Zm117.66,7.61V79.9h108.9v7.61H400.07V222.92h-8.76V87.51h-50ZM0,79.9H11l151,226.44-62.4-83.41L9.16,90.71l-.4,132.22H0ZM449.36,213a3.19,3.19,0,1,1,3.13-3.18,3.1,3.1,0,0,1-3.13,3.18Zm8.61-8.38h4.69a4.28,4.28,0,0,0,4.64,4.26c3.05,0,4.78-1.84,4.78-5.28V181.8h4.77v21.83c0,6.2-3.58,9.77-9.5,9.77-5.56,0-9.38-3.46-9.38-8.77Zm25.12-.27h4.73c.41,2.92,3.26,4.78,7.37,4.78,3.84,0,6.65-2,6.65-4.72,0-2.35-1.79-3.76-5.86-4.72l-4-1c-5.56-1.31-8.1-4-8.1-8.54,0-5.49,4.47-9.15,11.18-9.15,6.25,0,10.81,3.66,11.09,8.85h-4.65c-.45-2.84-2.92-4.62-6.5-4.62-3.77,0-6.28,1.82-6.28,4.6,0,2.2,1.62,3.47,5.62,4.41l3.39.83c6.31,1.47,8.91,4,8.91,8.68,0,5.9-4.57,9.6-11.85,9.6-6.82,0-11.4-3.53-11.74-9.05Z" />
				</svg>
				<p>Next.js</p>
			</div>
			<div className="firebase-logo">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
					<path
						d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z"
						fill="#ffa000"
					/>
					<path d="M13.445 8.543l2.972 5.995-11.97 11.135z" fill="#f57f17" />
					<path
						d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z"
						fill="#ffca28"
					/>
					<path d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z" fill="#ffa000" />
				</svg>
				<p>Firebase</p>
			</div>
		</div>
	);
};

export default Icons;
