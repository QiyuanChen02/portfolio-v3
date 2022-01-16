import React, { useState, useRef, useEffect } from "react";

import Topbar from "./topbar";
import Landing from "./landing";
import Canvas from "./canvas";
import { linkTo } from "../../usefulfunctions";

const Header: React.FC = () => {
	const header = useRef<HTMLDivElement>(null);

	//Gets the size of the header div
	const [headerSize, setHeaderSize] = useState<number[]>([0, 0]);
	useEffect(() => {
		const handleResize = () => {
			setHeaderSize([
				header.current!.offsetWidth,
				header.current!.offsetHeight,
			]);
		};
		window.addEventListener("resize", handleResize);
		window.addEventListener("load", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("load", handleResize);
		};
	}, []);

	//Prints secret info about the page
	useEffect(() => {
		console.log(
			"Psst...Hey fellow developer looking through my code, there's a secret place you can chat with me, at http://twitch.tv/failtowinbot ;)"
		);
	}, []);

	return (
		<header ref={header} id="header">
			<Topbar />
			<Landing />
			<Canvas width={headerSize[0]} height={headerSize[1]} />

			{/* Pointing chevron */}
			<div data-location="#projects" onClick={linkTo} className="chevron">
				<svg viewBox="0 0 24 24">
					<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
				</svg>
			</div>
		</header>
	);
};

export default Header;
