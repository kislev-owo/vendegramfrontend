import React, { useState, useEffect, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

// Función que genera las vistas de los objetos filtrados por nombre del arreglo "productos"
export const Productos = props => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	// Funciones que guardan el resultado de la búsqueda de productos y actualizan su estado
	const [buscarProducto, setBuscarProducto] = useState("");
	//const productoFiltrado = store.productos.filter(producto =>
	//	producto.nombre.toLowerCase().includes(buscarProducto.toLowerCase())
	//);
	//console.log(productoFiltrado);

	return (
		<>
			<h2 className="text-info ml-4 margen">Productos encontrados</h2>

			<div className="jumbotron">
				<h1 className="display-4" />
				<div className=" scrolling-wrapper row flex-row wrapper flex-nowrap mt-3 pb-4">
					{store.resultadosBusqueda &&
						store.resultadosBusqueda.map((item, index) => {
							console.log(store.resultadosBusqueda);
							return (
								<div key={index} className="container mt-2">
									<div className="card border-info mb-1 h-100">
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
													<h6 className="card-title">{item.nombre}</h6>

													<div className="col">
														<h6>Precio:</h6>
														<p>{item.precio}</p>
													</div>
												</div>
												<div className="card-footer">
													<button
														className="btn btn-primary rounded-sm"
														type="button"
														id="button-addon2"
														style={{ background: "#03989E" }}
														onClick={e => history.push(`./DetalleProducto/${item}`)}>
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
				<Link to="/">
					<button className="btn btn-primary" style={{ background: "#03989E" }}>
						Home
					</button>
				</Link>
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
