import React from "react";

import { useModalUpdate } from "../../contexts/modalcontext";
import { linkTo, reloadPage } from "../../usefulfunctions";

const TopBar: React.FC = () => {
	const toggleModal = useModalUpdate();

	return (
		<div className="topbar">
			<div className="logo">
				<svg
					data-location="/"
					onClick={reloadPage}
					viewBox="0 0 61.2 82.1"
					xmlns="http://www.w3.org/2000/svg">
					<g
						strokeLinecap="round"
						fillRule="evenodd"
						fontSize="9pt"
						stroke="#000"
						strokeWidth="0.25mm"
						fill="#FFFFFF">
						<path
							d="M 48.3 82.1 L 39.4 68.3 L 8.5 72.6 L 1.5 15.8 L 10.5 14.6 L 16.3 63 L 34.2 60.5 L 21.1 41.3 L 28.3 36.5 L 43.5 59.3 L 48.4 58.6 L 51.4 9.1 L 0 8.3 L 0.5 0 L 61.2 1 L 57 65.8 L 48.9 66.9 L 56.2 77 L 48.3 82.1 Z"
							vectorEffect="non-scaling-stroke"
						/>
					</g>
				</svg>
			</div>
			<nav>
				<ul>
					<li data-location="#projects" onClick={linkTo} tabIndex={0}>
						Projects
					</li>
					<li data-location="#about" onClick={linkTo} tabIndex={0}>
						About Me
					</li>
					<li onClick={toggleModal} tabIndex={0}>
						Contact
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default TopBar;
