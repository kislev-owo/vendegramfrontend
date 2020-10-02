import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { DropdownMenu, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/home.scss";

export const BuscarEtiqueta = props => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [etiquetaABuscar, setEtiquetaABuscar] = useState("");

	console.log(etiquetaABuscar);

	return (
		<>
			<div className="input-group">
				<select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
					<option selected>Elige una etiqueta...</option>
					{store.etiquetas.map((etiqueta, index) => {
						/*antes del 2do return mapeamos pasandole el array (store.favorites) luego creamos una funcion flecha => y la recibimos como parametro y a su vez recibe como parametro el array favorites y index... entonces q va a sucecer por cada entrada de nuestro store.favorites va a invocar la funcion flecha con los parametros ya definidos de favorites y su index en cada iteracion*/
						return (
							<option
								key={index}
								value={etiquetaABuscar}
								onChange={e => setEtiquetaABuscar(e.target.value)}>
								{etiqueta}
							</option>
						);
					})}
				</select>
				<div className="input-group-append">
					<button
						className="btn btn-outline-light"
						type="button"
						style={{ background: "#03989E" }}
						onClick={() => {
							actions.buscarEtiquetas(etiquetaABuscar);
							history.push("../Etiquetas");
						}}>
						Etiquetas
					</button>
				</div>
			</div>
		</>
	);
};

BuscarEtiqueta.propTypes = {};
