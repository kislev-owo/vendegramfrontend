import React, { useState, useEffect, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Buscar } from "../component/Buscar";
import { EtiquetasCard } from "../component/EtiquetasCard";

// Función que genera las vistas de los objetos filtrados por nombre del arreglo "productos"
export const Etiquetas = props => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	// Funciones que guardan el resultado de la búsqueda de etiquetas y actualizan su estado
	//	const [buscarEtiqueta, setBuscarEtiqueta] = useState("");

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
								Etiquetas de Productos
							</span>
						</h2>

						<div className="text-center mt-2 mb-2">
							<div className="card-deck d-flex align-items-center">
								<EtiquetasCard />
							</div>
						</div>
						<div clasName="row-flex justify-content-between align-items-center">
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
		</>
	);
};

Etiquetas.propTypes = {};
