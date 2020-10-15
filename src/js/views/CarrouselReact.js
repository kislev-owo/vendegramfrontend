import React, { useState, useEffect, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Buscar } from "../component/Buscar";
import productos from "../../img/productos2.jpg";
import frutas from "../../img/Frutas.png";
import servicios from "../../img/servicios2.jpeg";
import reparaciones from "../../img/reparaciones2.jpg";
//import rigoBaby from "../../img/rigo-baby.png";

export const Carrousel = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [value, setValue] = useState("");

	return (
		<div className="container">
			<div className="jumbotron h-auto ml-1 mr-1 mt-2 pt-4 ">
				<div className="text-center mb-2">
					<Carousel style={{ color: "#03989E" }}>
						<Carousel.Item style={{ color: "#03989E" }}>
							<img
								className="d-block m-auto img-thumbnail"
								src={productos}
								alt="First slide"
								style={{ width: 850, height: 550 }}
							/>
							<Carousel.Caption>
								<button
									className="btn btn-primary rounded-lg"
									type="button"
									id="button-addon2"
									value="productos"
									style={{ background: "#03989E" }}
									onClick={() => {
										actions.fetchCargarProductoEtiquetas("productos");
										console.log("Esta es la etiqueta Productos de EtiquetasCard");
										history.push("../Productos");
									}}>
									<p className="card-title">Productos</p>
								</button>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block m-auto img-thumbnail "
								src={servicios}
								alt="Second slide"
								style={{ width: 850, height: 550 }}
							/>

							<Carousel.Caption>
								<button
									className="btn btn-primary rounded-lg"
									type="button"
									id="button-addon2"
									value="servicios"
									style={{ background: "#03989E" }}
									onClick={() => {
										actions.fetchCargarProductoEtiquetas("servicios");
										console.log("Esta es la etiqueta Servicios de EtiquetasCard");
										history.push("../Productos");
									}}>
									<p className="card-title">Servicios</p>
								</button>
								{/* <p style={{ color: "#03989E" }}>Accede a todo tipo de servicios.</p> */}
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block  m-auto img-thumbnail"
								src={frutas}
								alt="Third slide"
								style={{ width: 850, height: 550 }}
							/>

							<Carousel.Caption>
								<button
									className="btn btn-primary rounded-lg"
									type="button"
									id="button-addon2"
									value="alimentos"
									style={{ background: "#03989E" }}
									onClick={() => {
										actions.fetchCargarProductoEtiquetas("alimentos");
										console.log("Esta es la etiqueta alimentos de EtiquetasCard");
										history.push("../Productos");
									}}>
									<p className="card-title">Alimentos</p>
								</button>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block m-auto img-thumbnail"
								src={reparaciones}
								alt="Fourth slide"
								style={{ width: 850, height: 550 }}
							/>

							<Carousel.Caption>
								<button
									className="btn btn-primary rounded-lg"
									type="button"
									id="button-addon2"
									value="reparaciones"
									style={{ background: "#03989E" }}
									onClick={() => {
										actions.fetchCargarProductoEtiquetas("reparaciones");
										console.log("Esta es la etiqueta reparaciones de EtiquetasCard");
										history.push("../Productos");
									}}>
									<p className="card-title">Reparaciones</p>
								</button>
								{/* <p style={{ color: "#03989E" }}>Encuentra Proveedores de servicios de reparaciones.</p> */}
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		</div>
	);
};
