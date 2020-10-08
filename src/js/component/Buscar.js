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
	//const [etiquetaGeneralABuscar, setEtiquetaGeneralABuscar] = useState("");

	console.log(productoABuscar);

	useEffect(() => {
		//		actions.fetchCargarProductos();
		//		actions.fetchCargarEtiquetas();
		//      actions.fetchCargarTiendas();
	}, []);

	return (
		<div className="d-flex align-items-center ml-3 mr-3">
			{/* ##### Input select options para búsqueda por Zonas #####*/}
			<div className="mb-1 col-4">
				<div className="input-group">
					<select
						className="custom-select"
						id="inputGroupSelect01"
						aria-label="Example select with button addon"
						value={zonaABuscar}
						onChange={e => setZonaABuscar(e.target.value)}>
						<option selected />
						{store.zonas.map((zona, index) => {
							return <option key={index}>{zona}</option>;
						})}
					</select>
					<div className="input-group-append">
						<label
							className="input-group-text"
							htmlFor="inputGroupSelect01"
							style={{ background: "#03989E" }}>
							Zonas
						</label>
					</div>
				</div>
			</div>

			{/* ##### Input select options para búsqueda por Etiqueta General ##### */}
			{/* <div className="mb-1 col-3">
				<div className="input-group">
					<select
						className="custom-select"
						id="inputGroupSelect01"
						aria-label="Example select with button addon"
						value={etiquetaGeneralABuscar}
						onChange={e => setEtiquetaGeneralABuscar(e.target.value)}>
						<option selected />
						<option>productos</option>
						<option>servicios</option>
					</select>
					<div className="input-group-append">
						<label
							className="input-group-text"
							htmlFor="inputGroupSelect01"
							style={{ background: "#03989E" }}>
							Etiqueta General
						</label>
					</div>
				</div>
			</div> */}

			{/* ##### Input select options para búsqueda por Etiquetas ##### */}
			<div className="mb-1 col-4">
				<div className="input-group">
					<select
						className="custom-select"
						id="inputGroupSelect02"
						aria-label="Example select with button addon"
						value={etiquetaABuscar}
						onChange={e => setEtiquetaABuscar(e.target.value)}>
						<option selected />
						{store.etiquetas.map((etiqueta, index) => {
							return <option key={index}>{etiqueta}</option>;
						})}
					</select>
					<div className="input-group-append">
						<label
							className="input-group-text"
							htmlFor="inputGroupSelect02"
							style={{ background: "#03989E" }}>
							Etiquetas
						</label>
					</div>
				</div>
			</div>

			{/* ##### Input de búsqueda general por Productos ##### */}
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
							actions.fetchCargarProductos(productoABuscar, etiquetaABuscar, zonaABuscar);
							console.log(
								"Búsqueda de " +
									productoABuscar +
									" " +
									etiquetaABuscar +
									" " +
									zonaABuscar +
									" " +
									" en productos"
							);
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

{
	/* Componente para búsqueda por Etiquetas*/
}
//			<div className="mb-1 col-4">
//				<BuscarEtiqueta state={etiquetaABuscar} setState={setEtiquetaABuscar} />
//			</div>
