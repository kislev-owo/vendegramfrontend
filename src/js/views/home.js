import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Buscar } from "../component/Buscar";
//import { Etiquetas } from "../views/Etiquetas";
import { EtiquetasCard } from "../component/EtiquetasCard";
import { TiendasCard } from "../component/TiendasCard";
import "../../styles/home.scss";

export const Home = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container-fluid">
				<div>
					<div className="mt-1 ">
						<Buscar />
					</div>
				</div>
				<div className="jumbotron mt-2 pt-4 ">
					<div className="text-center mb-2">
						<div className="row-flex">
							<h2 className="text-center ml-4 mb-2 m-auto">
								<span className="badge badge-pill badge-light border border-info mb-4">
									¿Que estás buscando?
								</span>
							</h2>
						</div>
						<div className="card-deck d-flex align-items-center">
							<EtiquetasCard />
						</div>

						<div clasName="row-flex justify-content-between align-items-center">
							<Link to="/Etiquetas">
								<button className="btn btn-primary mr-1" style={{ background: "#03989E" }}>
									Etiquetas
								</button>
							</Link>

							<Link to="/CarrouselReact">
								<button className="btn btn-primary mr-1" style={{ background: "#03989E" }}>
									Carrousel
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

				<div className="container-fluid">
					<div className="row">
						<div className="col-5">
							<ul className="list-group list-group-flush">
								<li className="list-group-item list-group-item-secondary">Actividad Reciente</li>
								<li className="list-group-item">Kislev se registró como vendedora</li>
								<li className="list-group-item">Oscar acaba de comprar</li>
								<li className="list-group-item">Albany se registró como compradora</li>
							</ul>
						</div>

						<div className="col-3 ml-auto mt-5">
							<a
								href="http://t.me/VendegramBot"
								className="btn btn-primary rounded align-center"
								style={{ background: "#03989E" }}>
								Ve a nuestro Telegram
								<a href="http://t.me/VendegramBot" className="badge badge-primary">
									<i
										className="fa fa-paper-plane"
										aria-hidden="true"
										style={{ background: "000000" }}
									/>
								</a>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

// <button type="button" className="btn btn-light btn-sm btn-block border border-info rounded-pill mb-4">
//					<h3>¿Que estás buscando?</h3>
//				</button>

// <Link to="/TiendasCard"></Link>
