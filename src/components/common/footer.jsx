import React from "react";
import { Link } from "react-router-dom";
import Pdf from './pdf/1.pdf';
import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Accueil</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">A propos de moi</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Mes Projets</Link>
						</li>
						<li className="footer-nav-link-item">
							
							<a href = {Pdf} target = "_blank" >Mon CV</a>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2023 Safidiarijaona.dev
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
