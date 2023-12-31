/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
	return (
		<footer className="bg-body-tertiary text-center text-lg-start align-items-center">
			<h5 className="text-center">
				Derechos de autor © {new Date().getFullYear()}
			</h5>
		</footer>
	);
};

export default Footer;
