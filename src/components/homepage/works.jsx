import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Expériences et Formations"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./mpeb.jpg"
								alt="mpeb"
								className="work-image"
							/>
							<div className="work-title">Ministère de la Pêche et de l' Economie Bleue</div>
							<div className="work-subtitle">
								Développeur d' application web (Stage)
							</div>
							<div className="work-duration">Août 2022 - Décembre 2022</div>
						</div>

						<div className="work">
							<img
								src="./itu.png"
								alt="itu"
								className="work-image"
							/>
							<div className="work-title">IT University</div>
							<div className="work-subtitle">
								Licence en développement d'application
							</div>
							<div className="work-duration">Décembre 2019 - Mars 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
