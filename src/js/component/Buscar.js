import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { ProdFiltrado } from "../views/ProdFiltrado";
import "../../styles/home.scss";

// Función Buscar para generar los inputs de búsqueda de Productos en General y por Zona
export const Buscar = () => {
	const history = useHistory();
	const [productoABuscar, setProductoABuscar] = useState("");
	//	const productosFiltrado = store.productos.filter(producto =>
	//		producto.nombre.toLowerCase().includes(buscarProducto.toLowerCase())
	//	);

	return (
		<div className="row">
			{
				// Input de búsqueda general de Productos
			}
			<div className="input-group mb-3 col-8">
				<input
					type="text"
					className="form-control"
					placeholder="Escribir búsqueda"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
				/>

				<div className="input-group-append">
					<button
						className="btn btn-outline-secondary"
						type="button"
						id="button-addon2"
						value={productoABuscar}
						onChange={e => setProductoABuscar(e.target.value)}
						onClick={e => history.push(`../Productos`)}>
						{"Buscar todos"}
					</button>
				</div>
			</div>

			{
				// Input de Búsqueda por Zona
			}
			<div className="input-group mb-3 col-4">
				<input type="text" className="form-control" aria-label="Text input with dropdown button" />
				<div className="input-group-append">
					<button
						className="btn btn-outline-secondary dropdown-toggle"
						type="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Zonas
					</button>
					<div className="dropdown-menu">
						<a className="dropdown-item" href="#">
							Altamira
						</a>
						<a className="dropdown-item" href="#">
							Las Mercedes
						</a>
						<a className="dropdown-item" href="#">
							Los Palos Grandes
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
