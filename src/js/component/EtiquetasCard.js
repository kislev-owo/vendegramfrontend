import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/home.scss";

// Función Buscar para generar los inputs de búsqueda de Producos en General y por Zona

export const EtiquetasCard = props => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	return (
		<>
			{store.etiquetas.map((etiqueta, index) => {
				return (
					<div className="d-flex justify-content-between align-items-center" key={index}>
						<div className="mb-3">
							<div className="card h-50">
								<img src="https://via.placeholder.com/150x50" className="card-img-top" alt="Foto" />
								<div className="card-body">
									<button
										className="btn btn-success"
										type="button"
										id="button-addon2"
										onClick="{e => buscarCategoria()}">
										<h5 className="card-title">{etiqueta}</h5>
									</button>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

EtiquetasCard.propTypes = {};
