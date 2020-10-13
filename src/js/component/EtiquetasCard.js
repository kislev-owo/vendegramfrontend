import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/home.scss";

// Función Buscar para generar los inputs de búsqueda de Producos en General y por Zona

export const EtiquetasCard = props => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [etiquetaABuscar, setEtiquetaABuscar] = useState("");

	//	console.log(etiquetaABuscar);

	return (
		<>
			{store.etiquetas.map((etiqueta, index) => {
				return (
					<div className="d-flex justify-content-between align-items-center" key={index}>
						<div className="card h-25 mb-2">
							<img src="https://via.placeholder.com/75x25" className="card-img-top" alt="Foto" />
							<div className="card-body">
								<button
									className="btn btn-primary rounded-lg"
									type="button"
									id="button-addon2"
									value={etiqueta}
									style={{ background: "#03989E" }}
									onClick={() => {
										actions.fetchCargarProductoEtiquetas(etiqueta);
										console.log("Esta es la etiqueta " + etiqueta + " de EtiquetasCard");
										history.push("../Productos");
									}}>
									<p className="card-title">{etiqueta}</p>
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

EtiquetasCard.propTypes = {};
