import React, { useState, useEffect, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { Context } from "../store/appContext";
import calabaza from "../../img/calabaza.jpg";
import coliflor from "../../img/coliflor.jpg";
import pimiento from "../../img/pimiento.jpg";
//import rigoBaby from "../../img/rigo-baby.png";

export const Carrousel = () => {
	return (
		<div className="container">
			<Carousel style={{ color: "#03989E" }}>
				<Carousel.Item style={{ color: "#03989E" }}>
					<img className="d-block w-75 " src={calabaza} alt="First slide" />
					<Carousel.Caption>
						<h3 style={{ color: "#03989E" }}>Calabaza</h3>
						<p style={{ color: "#03989E" }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-75 " src={pimiento} alt="Third slide" />

					<Carousel.Caption>
						<h3 style={{ color: "#03989E" }}>Pimiento</h3>
						<p style={{ color: "#03989E" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-75 " src={coliflor} alt="Third slide" />

					<Carousel.Caption>
						<h3 style={{ color: "#03989E" }}>Coliflor</h3>
						<p style={{ color: "#03989E" }}>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
