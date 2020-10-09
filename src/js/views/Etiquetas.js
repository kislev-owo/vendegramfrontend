import React, { useState, useEffect, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

// Función que genera las vistas de los objetos filtrados por nombre del arreglo "productos"
export const Etiquetas = props => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	// Funciones que guardan el resultado de la búsqueda de etiquetas y actualizan su estado
	//	const [buscarEtiqueta, setBuscarEtiqueta] = useState("");

	return (
		<>
			<h2 className="text-info ml-4 margen">Productos encontrados</h2>

			<div className="jumbotron">
				<h1 className="display-4" />
				<div className=" scrolling-wrapper row flex-row wrapper flex-nowrap mt-4 pb-4">
					{store.productos &&
						store.productos.map((item, index) => {
							return (
								<div key={index} className="container mt-2">
									<div className="card mb-3">
										<div className="row no-gutters">
											<div className="col-md-4">
												<img
													src="https://via.placeholder.com/500x400"
													className="card-img-top"
													alt="Foto del Producto"
												/>
											</div>
											<div className="col-md-8">
												<div className="card-body">
													<h5 className="card-title">{item.titulo}</h5>
												</div>
												<div className="col">
													<h5>Producto:</h5>
													<p>{item.titulo}</p>
												</div>

												<div className="col">
													<h5>Precio:</h5>
													<p>{item.precio}</p>
												</div>

												<div className="col">
													<h5>Categorías:</h5>
													<p>{item.etiqueta_general}</p>
												</div>
											</div>
										</div>
									</div>
									<div className="row more-info">
										<button
											className="btn btn-primary rounded-sm"
											type="button"
											id="button-addon2"
											style={{ background: "#03989E" }}>
											<h6 className="card-title">Más detalles</h6>
										</button>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
};

Etiquetas.propTypes = {
	item: PropTypes.array,
	name: PropTypes.string,
	imagen: PropTypes.string,
	descripcion: PropTypes.string,
	precio: PropTypes.string,
	cantidad: PropTypes.string,
	categorias: PropTypes.string
};
