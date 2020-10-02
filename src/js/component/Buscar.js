import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { DropdownMenu, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Productos } from "../views/Productos";
import { BuscarZona } from "./BuscarZona";
import { BuscarEtiqueta } from "./BuscarEtiqueta";
import "../../styles/home.scss";

// Función Buscar para generar los inputs de búsqueda de Productos en General y por Zona
export const Buscar = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [productoABuscar, setProductoABuscar] = useState("");
	const [zonaABuscar, setZonaABuscar] = useState("");
	const [etiquetaABuscar, setEtiquetaABuscar] = useState("");

	// Funcion para la búsqueda simultanea por Producto, Etiqueta y Zona
	const Busqueda = () => {
		if (productoABuscar != []) {
			if (etiquetaABuscar != []) {
				if (zonaABuscar != []) {
					actions.buscarProductos(productoABuscar, etiquetaABuscar, zonaABuscar);
				}
			}
		}
		actions.buscarProductos(productoABuscar);
	};

	console.log(productoABuscar);

	return (
		<div className="d-flex align-items-center ml-4 mr-4">
			{/* div que contiene el componente para la búsqueda por zonas*/}
			<div className="mb-1 col-3">
				<BuscarZona />
			</div>

			{/* Componente para búsqueda por Etiquetas*/}
			<div className="mb-1 col-3">
				<BuscarEtiqueta />
			</div>

			{/* Input de búsqueda general de Productos*/}
			<div className="input-group mb-1 col-3 ">
				<input
					type="text"
					className="form-control"
					placeholder="Escribir búsqueda"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
					value={productoABuscar}
					onChange={e => setProductoABuscar(e.target.value)}
				/>

				<div className="input-group-append">
					<button
						className="btn btn-outline-light"
						type="button"
						id="button-addon2"
						style={{ background: "#03989E" }}
						onClick={() => {
							actions.buscarProductos(productoABuscar);
							history.push("../Productos");
						}}>
						{"Ver todos"}
					</button>
				</div>
			</div>
		</div>
	);
};

//	const productosFiltrado = store.productos.filter(producto =>
//		producto.nombre.toLowerCase().includes(buscarProducto.toLowerCase())
//	);
