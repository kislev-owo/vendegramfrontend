import React, { useState, useEffect, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

// Función que genera las vistas de los objetos filtrados por nombre del arreglo "productos"
export const ProdFiltrado = props => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	// Funciones que guardan el resultado de la búsqueda de productos y actualizan su estado
	const [buscarProducto, setBuscarProducto] = useState("");
	const productosFiltrado = store.productos.filter(producto =>
		producto.nombre.toLowerCase().includes(buscarProducto.toLowerCase())
	);
	console.log(productosFiltrado);

	return (
		<>
			<h2 className="text-info ml-4 margen">Productos encontrados</h2>
			<input
				className="w-25 ml-4"
				type="text"
				placeholder="Search"
				onChange={e => setBuscarProducto(e.target.value)}
			/>

			<div className="jumbotron">
				<h1 className="display-4" />
				<div className=" scrolling-wrapper row flex-row wrapper flex-nowrap mt-4 pb-4">
					{productosFiltrado.map((item, index) => {
						return (
							<div key={index} className="container mt-2">
								<div className="card mb-3">
									<div className="row no-gutters">
										<div className="col-md-4">
											<img
												src="https://via.placeholder.com/500x400"
												className="card-img"
												alt="Foto del Producto"
											/>
										</div>
										<div className="col-md-8">
											<div className="card-body">
												<h5 className="card-title">{item.nombre}</h5>
											</div>
										</div>
									</div>
								</div>
								<div className="row more-info">
									<div className="col">
										<h5>Producto:</h5>
										<p>{item.nombre}</p>
									</div>
									<div className="col">
										<h5>Descripción:</h5>
										<p>{item.descripcion}</p>
									</div>
									<div className="col">
										<h5>Precio:</h5>
										<p>{item.precio}</p>
									</div>
									<div className="col">
										<h5>Cantidad:</h5>
										<p>{item.cantidad}</p>
									</div>
									<div className="col">
										<h5>Categorías:</h5>
										<p>{item.categorias}</p>
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

ProdFiltrado.propTypes = {
	item: PropTypes.array,
	name: PropTypes.string,
	imagen: PropTypes.string,
	descripcion: PropTypes.string,
	precio: PropTypes.string,
	cantidad: PropTypes.string,
	categorias: PropTypes.string
};
