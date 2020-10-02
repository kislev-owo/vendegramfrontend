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
		if (zonaABuscar != "") {
			//			if (etiquetaABuscar != "") {
			//				if (productoABuscar != "") {
			//					actions.buscarXZonaEtiquetaProducto(
			//						zonaABuscar,
			//						etiquetaABuscar,
			//						productoABuscar
			//					); /* caso(5) 1,1,1 zona + etiqueta + producto */
			//				}
			//				actions.buscarXZonaEtiqueta(zonaABuscar, etiquetaABuscar); /* caso(6) 1,1,0 zona + etiqueta */
			//			} else if (productoABuscar != "") {
			//				actions.buscarXZonaProducto(zonaABuscar, productoABuscar); /* caso(8) 1,0,1 zona + producto */
			//		        }
			actions.buscarXZona(zonaABuscar); /* caso(7) 1,0,0 zona */
		} else if (etiquetaABuscar != "") {
			if (productoABuscar != "") {
				actions.buscarxEtiquetaProducto(
					etiquetaABuscar,
					productoABuscar
				); /* caso(3) 0,1,1 etiqueta + producto */
			}
			actions.buscarEtiquetas(etiquetaABuscar); /* caso(4) 0,1,0 etiqueta */
		}
		actions.buscarProductos(productoABuscar); /* caso(1-2) 0,0,0 - 0,0,1 todos - producto */
	};

	console.log(productoABuscar);

	return (
		<div className="d-flex align-items-center ml-4 mr-4">
			{/* div que contiene el componente para la búsqueda por zonas*/}
			<div className="mb-1 col-4">
				<BuscarZona />
			</div>

			{/* Componente para búsqueda por Etiquetas*/}
			<div className="mb-1 col-4">
				<BuscarEtiqueta />
			</div>

			{/* Input de búsqueda general de Productos*/}
			<div className="input-group mb-1 col-4 ">
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
							Busqueda(productoABuscar);
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
