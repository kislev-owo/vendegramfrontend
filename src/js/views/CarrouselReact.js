import React, { useState, useEffect, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Buscar } from "../component/Buscar";
import calabaza from "../../img/calabaza.jpg";
import coliflor from "../../img/coliflor.jpg";
import pimiento from "../../img/pimiento.jpg";
//import rigoBaby from "../../img/rigo-baby.png";

export const Carrousel = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<div className="mt-1 ">
					<Buscar />
				</div>
			</div>

			<div className="jumbotron h-auto ml-1 mr-1 mt-2 pt-4 ">
				<div className="text-center mb-2">
					<Carousel style={{ color: "#03989E" }}>
						<Carousel.Item style={{ color: "#03989E" }}>
							<img className="d-block w-100 img-thumbnail" src={calabaza} alt="First slide" />
							<Carousel.Caption>
								<h3 style={{ color: "#03989E" }}>Calabaza</h3>
								<p style={{ color: "#03989E" }}>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img className="d-block w-100 img-thumbnail " src={pimiento} alt="Third slide" />

							<Carousel.Caption>
								<h3 style={{ color: "#03989E" }}>Pimiento</h3>
								<p style={{ color: "#03989E" }}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img className="d-block w-100 img-thumbnail" src={coliflor} alt="Third slide" />

							<Carousel.Caption>
								<h3 style={{ color: "#03989E" }}>Coliflor</h3>
								<p style={{ color: "#03989E" }}>
									Praesent commodo cursus magna, vel scelerisque nisl consectetur.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
					<div className="mt-2 mb-2">
						<Link to="/Etiquetas">
							<button className="btn btn-primary mr-1" style={{ background: "#03989E" }}>
								Etiquetas
							</button>
						</Link>
						<button
							className="btn btn-primary"
							style={{ background: "#03989E" }}
							onClick={() => {
								actions.fetchCargarTiendas();
								console.log("Esta es la vista de tiendas en TiendasCard");
								history.push("../TiendasCard");
							}}>
							Tiendas
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
