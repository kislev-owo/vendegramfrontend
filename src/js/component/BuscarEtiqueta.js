import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { DropdownMenu, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Busqueda } from "./Buscar";
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
							console.log(etiquetaABuscar);
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
