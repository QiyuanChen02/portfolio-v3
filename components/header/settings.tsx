import React, { useState, useEffect } from "react";
import interact from "interactjs";

export type SliderInfo = {
	speed: number;
	size: number;
	sizerange: number;
	number: number;
};

const returnPadding = (value: number, maxValue: number) => value / maxValue * 100 + "%"

const maxSliderValue: SliderInfo = {
	speed: 100,
	size: 100,
	sizerange: 100,
	number: 400,
}

type SettingsProps = {
	toggleParticleSettings: (newSettings: SliderInfo) => void;
};

const Settings: React.FC<SettingsProps> = ({ toggleParticleSettings }) => {
	const [sliderInfo, setSliderInfo] = useState<SliderInfo>({
		speed: 1,
		size: 1,
		sizerange: 0,
		number: 20,
	});

	const [settingVisible, setSettingVisible] = useState<boolean>(false);

	//This code fixes visual bug on load
	const [visiblility, setVisibility] = useState<"visible" | "hidden">("hidden");
	useEffect(() => {
		setVisibility("visible");
	}, []);

	//Interacting with the slider
	useEffect(() => {
		const slider = interact(".slider");
		slider.draggable({
			origin: "self",
			inertia: true,
			modifiers: [
				interact.modifiers.restrict({
					restriction: "self",
				}),
			],

			listeners: {
				move(e) {
					const sliderWidth = interact.getElementRect(e.target).width;
					const value = e.pageX / sliderWidth;

					const sliderType: string = e.target.getAttribute("data-slidertype");
					setSliderInfo((sliderInfo) => {
						return {
							...sliderInfo,
							[sliderType]: Math.round(value * maxSliderValue[sliderType as keyof SliderInfo]),
						};
					});
				},
			},
		});
	}, []);

	return (
		<section className={`settings ${settingVisible ? "active" : ""}`} style={{ visibility: visiblility }}>
			<div className="sliderText">
				<p>Particle speed: </p>
				<p>{sliderInfo.speed}</p>
			</div>
			<div className="slider" data-slidertype="speed" data-value={sliderInfo.speed} style={{ paddingLeft: returnPadding(sliderInfo.speed, maxSliderValue.speed) }}></div>
			<div className="sliderText">
				<p>Particle size: </p>
				<p>{sliderInfo.size}</p>
			</div>
			<div className="slider" data-slidertype="size" data-value={sliderInfo.size} style={{ paddingLeft: returnPadding(sliderInfo.size, maxSliderValue.size) }}></div>
			<div className="sliderText">
				<p>Range of particle size: </p>
				<p>{sliderInfo.sizerange}</p>
			</div>
			<div className="slider" data-slidertype="sizerange" data-value={sliderInfo.sizerange} style={{ paddingLeft: returnPadding(sliderInfo.sizerange, maxSliderValue.sizerange) }}></div>
			<div className="sliderText">
				<p>Number of particles: </p>
				<p>{sliderInfo.number}</p>
			</div>
			<div className="slider" data-slidertype="number" data-value={sliderInfo.number} style={{ paddingLeft: returnPadding(sliderInfo.number, maxSliderValue.number) }}></div>

			<div className="settingsWrapper">
				<svg
					viewBox="0 0 24 24"
					onClick={() =>
						setSettingVisible((settingVisible) => !settingVisible)
					}>
					<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
				</svg>
				<button onClick={() => toggleParticleSettings(sliderInfo)}>
					Change!
				</button>
			</div>
		</section>
	);
};

export default Settings;
