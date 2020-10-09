import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ProductosTienda = props => {
	const { store, actions } = useContext(Context);

	return store.tiendas[parseInt(props.nombre)].productos.map((producto, index) => {
		return (
			<div className="card  mt-5 text-center" style={{ width: "18rem", marginRight: "3rem" }} key={index}>
				<img src={producto.foto} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title text-wrap">{producto.titulo}</h5>
					<p className="card-tex text-wrap">{producto.descripcion}</p>
					<p className="card-text text-wrap">{producto.precio}</p>
				</div>
			</div>
		);
	});
};

};


ProductosTienda.propTypes = {
	nombre: PropTypes.string
};
