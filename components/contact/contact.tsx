import React, { useContext } from "react";

import { useModal, useModalUpdate } from "../../contexts/modalcontext";

const Contact: React.FC = () => {
	const modalActive = useModal();
	const toggleModal = useModalUpdate();

	return (
		<>
			<section
				className={`contact ${modalActive ? "active" : ""}`}
				id="contact">
				<button className="close-modal" onClick={toggleModal}>
					&times;
				</button>
				<div className="form-header">
					<h3>Let&apos;s Talk</h3>
				</div>
				<form
					action="https://formsubmit.co/d15cb9f833036aa19e3200df1c447db4"
					method="POST">
					<input type="hidden" name="_captcha" value="false" />
					<div className="form-name">
						<label htmlFor="name">Name *</label>
						<input type="text" name="name" id="name" required />
					</div>
					<div className="form-email">
						<label htmlFor="email">Email *</label>
						<input type="email" name="email" id="email" required />
					</div>
					<div className="form-message">
						<label htmlFor="message">Message *</label>
						<textarea name="message" id="message" required />
					</div>
					<div className="button-wrapper">
						<button type="submit">Send</button>
					</div>
				</form>
			</section>
			<div
				id="overlay"
				onClick={toggleModal}
				className={`${modalActive ? "active" : ""}`}></div>
		</>
	);
};

export default Contact;
