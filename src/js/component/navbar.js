import React from "react";
import { Link } from "react-router-dom";
// var cloudinary = require("cloudinary-core");
// import { Cloudinary } from "cloudinary-core";
//  var cl = new cloudinary.Cloudinary({ cloud_name: "vendegram", secure: true });
//  var tag = cl.url("sample.jpg");
export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light " style={{ background: "#C4C4C4" }}>
			<div className="mr-auto p-2">
				<a className="navbar-brand " href="#">
					<img
						src={`https://res.cloudinary.com/vendegram/image/upload/v1600811711/Search-Bot_2_dzesqu.png`}
						width="80"
						height="80"
						alt=""
						loading="lazy"
					/>
				</a>
				<a className="navbar-brand" href="#" style={{ fontSize: "25px" }}>
					Vendegram
				</a>
				<span className="navbar-text">Tu vendedor de confiansa</span>
			</div>
			<div className="p-2">
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Inicio <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								¿Cómo Funciona?
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contáctanos
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
								Nosotros
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
								Registrate
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
								Ingresa
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
