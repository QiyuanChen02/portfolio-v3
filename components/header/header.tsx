import React, { useState, useRef, useEffect } from "react";

import Topbar from "./topbar";
import Landing from "./landing";
import Canvas from "./canvas";
import { linkTo } from "../../usefulfunctions";

const Header: React.FC = () => {

	return (
		<header id="header">
			<Topbar />
			<Landing />
			<Canvas />

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
