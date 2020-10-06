import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { DropdownMenu, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/home.scss";

export const Zona = props => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [ZonaABuscar, setZonaABuscar] = useState("");

	return (
		<>
			<div className="input-group">
				<select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
					<option selected>Elige una zona...</option>
					{store.zonas.map((zona, index) => {
						/*antes del 2do return mapeamos pasandole el array (store.favorites) luego creamos una funcion flecha => y la recibimos como parametro y a su vez recibe como parametro el array favorites y index... entonces q va a sucecer por cada entrada de nuestro store.favorites va a invocar la funcion flecha con los parametros ya definidos de favorites y su index en cada iteracion*/
						return (
							<option key={index} value={ZonaABuscar}>
								{zona}
							</option>
						);
					})}
				</select>
			</div>
		</>
	);
};

Zona.propTypes = {};
