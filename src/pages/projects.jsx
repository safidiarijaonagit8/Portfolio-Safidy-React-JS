import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Mes projets | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Mes réalisations.
						</div>

						<div className="subtitle projects-subtitle">
						
							J'ai travaillé sur de nombreux projets avec différents cas pratiques durant mon parcours académique jusqu'à aujourd'hui.
							Ces projets ont été donc réalisé durant mon cursus universitaire et mon stage de fin d' étude. D'autres ont été réalisé durant mon temps libre.
							<br></br>Je pense donc maitriser totalement la base relative à la programmation et au développement web, en général.<br></br>
							Vous trouverez ici, une partie de mes réalisations avec description et lien github.
							<br></br>
							( Vous trouverez touts mes projets sur Github )
							
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
