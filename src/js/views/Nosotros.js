import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Nosotros = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card-deck cpntainer">
			<div className="row my-5 d-flex mx-4">
				<div className="card col-4 mr-auto p-2">
					<img
						className="card-img-top"
						src="https://res.cloudinary.com/vendegram/image/upload/v1601167288/733d7c6d-aa38-4dc4-9d21-6a3a531971a1_esalqt.jpg"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">{`Kislev Zambrano`}</h5>
						<p className="card-text">
							{`Soy Kislev pero me llaman Kiss, estudio ingeniería en sistemas y en mi tiempo libre me gusta hacer manualidades y customizar ropa. 4geeksAcademy me dió la oportunidad de realizar un curso de programación, siendo la ganadora de un sorteo en sus redes sociales.`}
						</p>
						<p className="card-text">
							{/* <small className="text-muted">Last updated 3 mins ago</small> */}
						</p>
						<a
							href="https://github.com/kislev-owo"
							className="btn btn-primary "
							target="_blank"
							rel="noopener noreferrer"
							style={{ background: "#03989E", border: "none" }}>
							<i className="fab fa-github mx-2" />
							{`Github`}
						</a>
					</div>
				</div>

				<div className="card col-4 p-2">
					<img
						className="card-img-top"
						src="https://res.cloudinary.com/vendegram/image/upload/v1601168773/Albany-vendegram_bdzpun.png"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">{`Albany Padrón`}</h5>
						<p className="card-text">
							{`Soy Albany Padron, Ingeniero Electricista. Siempre dispuesta a adquirir nuevas herramientas que me permitan llevar a la vida nuevos proyectos de automatización.`}
						</p>
						<p className="card-text">
							{/* <small className="text-muted">{`Last updated 3 mins ago`}</small> */}
						</p>
						<a
							href="https://github.com/ananyabellop"
							className="btn btn-primary "
							target="_blank"
							rel="noopener noreferrer"
							style={{ background: "#03989E", border: "none" }}>
							<i className="fab fa-github mx-2" />
							{`Github`}
						</a>
					</div>
				</div>
			</div>
			<div className="row my-5 d-flex mx-4">
				<div className="card col-4 mr-auto p-2">
					<img
						className="card-img-top"
						src="https://res.cloudinary.com/vendegram/image/upload/v1601167625/WhatsApp_Image_2020-09-21_at_10.03.01_PM_rvqhab.jpg"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">{`Francisco Fossi`}</h5>
						<p className="card-text">
							{`Soy Francisco Fossi. Ingeniero de profesión, he trabajado por varios años en la Industria de los Alimentos. Me gustan los deportes al aire libre y la tecnología. `}
						</p>
						<p className="card-text">
							{/* <small className="text-muted">Last updated 3 mins ago</small> */}
						</p>
						<a
							href="https://github.com/franfossi"
							className="btn btn-primary"
							target="_blank"
							rel="noopener noreferrer"
							style={{ background: "#03989E", border: "none" }}>
							<i className="fab fa-github  mx-2" />
							{`Github`}
						</a>
					</div>
				</div>
				<div className="card col-4 p-2">
					<img
						className="card-img-top"
						src="https://res.cloudinary.com/vendegram/image/upload/v1601168784/Oscar-Vendegram_qgh62v.png"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">{`Oscar Mariño`}</h5>
						<p className="card-text">
							{`Soy Oscar Mariño, aficionado a la tecnología y a la programación. Mucho tiempo trabaje con soluciones Avaya (PBX y soluciones de call center) pero ya estoy de regreso, para utilizar lo aprendido para el desarrollo de soluciones WEB.`}
						</p>
						<p className="card-text">
							{/* <small className="text-muted">Last updated 3 mins ago</small> */}
						</p>
						<a
							href="https://github.com/oscarali1985"
							className="btn btn-primary "
							target="_blank"
							rel="noopener noreferrer"
							style={{ background: "#03989E", border: "none" }}>
							<i className="fab fa-github mx-2" />
							{`Github`}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
