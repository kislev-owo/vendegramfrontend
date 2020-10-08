import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ProductosTienda = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.tienda[parseInt(props.nombre)].productos.map((producto, index) => {
				return (
					<div className="card" style="width: 18rem;" value={index} key={index}>
						<img src={`producto.foto`} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{`producto.titulo`}</h5>
							<p className="card-text">{`producto.descripcion`}</p>
							<p className="card-text">{`producto.precio`}</p>
						</div>
					</div>
				);
			})}
			;
		</>
	);
};

ProductosTienda.propTypes = {
	nombre: PropTypes.string
};
