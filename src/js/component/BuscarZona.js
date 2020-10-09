import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { DropdownMenu, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/home.scss";

export const BuscarZona = props => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [ZonaABuscar, setZonaABuscar] = useState("");

	return (
		<>
			<div className="input-group">
				<select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
					<option selected>Elige una zona...</option>
					{store.zonas.map((zona, index) => {
						return (
							<option key={index} value={ZonaABuscar}>
								{zona}
							</option>
						);
					})}
				</select>
				<div className="input-group-append">
					<button className="btn btn-outline-light" style={{ background: "#03989E" }} type="button">
						Zonas
					</button>
				</div>
			</div>
		</>
	);
};

BuscarZona.propTypes = {};

// onClick={e => history.push(favorite.url)}
