import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Buscar } from "../component/Buscar";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/home.scss";

// Función Buscar para generar los inputs de búsqueda de Producos en General y por Zona

export const TiendasCard = props => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [tiendaABuscar, setTiendaABuscar] = useState("");

	//	useEffect(() => {
	//		actions.fetchCargarTiendas();
	//	}, []);

	//	console.log(etiquetaABuscar);

	return (
		<>
			<div className="container">
				<div>
					<div className="mt-1 ">
						<Buscar />
					</div>
				</div>
				<div className="jumbotron ml-2 mr-2 mt-2 pt-4 ">
					<div className="text-center mb-2">
						<h2 className="text-center ml-4 mb-2 m-auto">
							<span className="badge badge-pill badge-info border" style={{ background: "#03989E" }}>
								Tiendas Disponibles
							</span>
						</h2>

						<div className="text-center mb-2 mt-3">
							<div className="card-deck d-flex align-items-center mb-5">
								{store.tiendas.map((tienda, index) => {
									return (
										<div className="card h-50" key={index}>
											<img
												src="https://via.placeholder.com/150x50"
												className="card-img-top"
												alt="Foto"
											/>
											<div className="card-body">
												<button
													className="btn btn-primary rounded-lg"
													type="button"
													id="button-addon2"
													value={tienda}
													style={{ background: "#03989E" }}
													onClick={() => {
														actions.fetchCargarVistaTienda(tienda);
														console.log("Esta es la tienda " + tienda + " de TiendasCard");
														history.push("../Productos");
													}}>
													<h5 className="card-title">{tienda.nombre_tienda}</h5>
												</button>
											</div>
										</div>
									);
								})}
							</div>
						</div>
						<div clasName="row-flex text-center align-items-center mt-3">
							<Link to="/Etiquetas">
								<button className="btn btn-primary mr-1" style={{ background: "#03989E" }}>
									Categorías
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

TiendasCard.propTypes = {
	//	nombre_tienda: Proptypes.string
};
