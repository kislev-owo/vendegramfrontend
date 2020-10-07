import React, { useState, useEffect, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Buscar } from "../component/Buscar";

// Función que genera las vistas de los objetos filtrados por nombre del arreglo "productos"
export const Productos = props => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	// Funciones que guardan el resultado de la búsqueda de productos y actualizan su estado
	const [buscarProducto, setBuscarProducto] = useState("");

	return (
		<>
			<div>
				<div className="mt-1 ">
					<Buscar />
				</div>
			</div>

			<div className="jumbotron ml-3 mr-3 mt-2 pt-4">
				<h2 className="text-center ml-4 mb-2 m-auto">
					<span className="badge badge-pill badge-info border" style={{ background: "#03989E" }}>
						Productos encontrados
					</span>
				</h2>

				<div className=" scrolling-wrapper row flex-row wrapper flex-nowrap mt-3 pb-2">
					{store.productos &&
						store.productos.map((item, index) => {
							return (
								<div key={index} className="container mt-2">
									<div className="card border-info mb-1">
										<div className="no-gutters">
											<div className="col-md-4">
												<img
													src="https://via.placeholder.com/500x400"
													className="card-img-top"
													alt="Foto del Producto"
												/>
											</div>
											<div className="">
												<div className="card-body">
													<h6 className="card-title">{item.titulo}</h6>

													<div className="col">
														<h6>Precio:</h6>
														<p>{item.precio}</p>
													</div>
													<div className="col">
														<h6>Categoría:</h6>
														<p>{item.etiqueta_general}</p>
													</div>
												</div>
												<div className="card-footer">
													<button
														className="btn btn-primary rounded-sm"
														type="button"
														id="button-addon2"
														style={{ background: "#03989E" }}
														onClick={e => history.push(`./DetalleProducto/${item.id}`)}>
														<h6 className="card-title">Más detalles</h6>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
};

Productos.propTypes = {
	item: PropTypes.array,
	name: PropTypes.string,
	imagen: PropTypes.string,
	descripcion: PropTypes.string,
	precio: PropTypes.string,
	cantidad: PropTypes.string,
	etiqueta1: PropTypes.string
};

// onClick={e => history.push(`/DetalleProducto/${index}`)}
//const productoFiltrado = store.productos.filter(producto =>
//	producto.nombre.toLowerCase().includes(buscarProducto.toLowerCase())
//);
//console.log(productoFiltrado);

// <div className=" scrolling-wrapper row flex-row wrapper flex-nowrap mt-3 pb-4">
