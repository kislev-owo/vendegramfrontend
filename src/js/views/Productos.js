import React, { useState, useEffect, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Buscar } from "../component/Buscar";

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

			<div className="jumbotron ml-1 mr-1 mt-2 pt-4">
				<h2 className="text-center ml-4 mb-2 m-auto">
					<span className="badge badge-pill badge-info border" style={{ background: "#03989E" }}>
						Productos encontrados
						<span className="badge badge-pill badge-light ml-1" style={{ color: "#03989E" }}>
							{store.productos.length}
						</span>
					</span>
				</h2>
				{/* <div className=" scrolling-wrapper row flex-row wrapper flex-nowrap mt-3 pb-4"> */}
				<div className="row row-cols-1 row-cols-md-5 mt-3">
					{
						// Función que genera las vistas de los objetos filtrados del arreglo "productos"
					}
					{store.productos &&
						store.productos.map((item, id) => {
							return (
								<div key={id} className="d-flex col mb-2 mt-2">
									<div className="card border-info h-100 w-100 mb-2">
										{/* <div className="no-gutters"> */}
										{/* <div className="col"> */}
										<img
											src="https://via.placeholder.com/150x100"
											className="card-img-top"
											alt="Foto del Producto"
										/>
										{/* </div> */}
										{/* <div className=""> */}
										<div className="card-body">
											<h6 className="card-title">
												<strong>{item.titulo}</strong>
											</h6>

											<div className="row-flex align-items-center">
												<strong>Precio: </strong>

												<span>{item.precio}</span>
											</div>
											<div className="">
												<p>
													<strong>Categoría:</strong>
												</p>

												<span>{item.etiqueta_general}</span>
											</div>
										</div>
										<div className="card-footer m-auto">
											<button
												className="btn btn-primary btn-sm rounded-sm"
												type="button"
												id="button-addon2"
												style={{ background: "#03989E" }}
												onClick={e => history.push(`./DetalleProducto/${item.id}`)}>
												<span className="">Detalles</span>
											</button>
										</div>
										{/* </div> */}
										{/* </div> */}
									</div>
								</div>
							);
						})}
					<div className="row-flex m-auto">
						<Link to="/Etiquetas">
							<button className="btn btn-primary mr-1" style={{ background: "#03989E" }}>
								Categorías
							</button>
						</Link>

						<button
							className="btn btn-primary"
							style={{ background: "#03989E" }}
							onClick={() => {
								console.log("Esta es la vista de tiendas en TiendasCard");
								history.push("../TiendasCard");
							}}>
							Tiendas
						</button>
					</div>
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
	etiqueta_general: PropTypes.string
};

// onClick={e => history.push(`/DetalleProducto/${index}`)}
//const productoFiltrado = store.productos.filter(producto =>
//	producto.nombre.toLowerCase().includes(buscarProducto.toLowerCase())
//);
//console.log(productoFiltrado);

// <div className=" scrolling-wrapper row flex-row wrapper flex-nowrap mt-3 pb-4"></div>
