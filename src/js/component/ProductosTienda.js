import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ProductosTienda = props => {
	const { store, actions } = useContext(Context);

	return store.productos_tienda.map((producto, index) => {
		return (
			<div className="card  mt-5 text-center" style={{ width: "18rem", marginRight: "3rem" }} key={index}>
				<img src={producto.foto} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title text-wrap">{`${producto.titulo}`}</h5>
					<p className="card-tex text-wrap">{`Descripción: ${producto.descripcion}`}</p>
					<p className="card-text text-wrap">{`Precio: ${producto.precio} $`}</p>
				</div>
				<div className="card-footer d-flex ">
					<div className="mr-auto  p-2">
						{/* AQUI PUEDES PONER EL ON CLICK PARA BORRAR EL PRODUCTO */}
						<i className="fas  fa-2x fa-trash-alt mr-auto" style={{ color: "#03989E" }} />
					</div>
					<div className="p-2">
						{/* AQUI PUEDES PONER EL ON CLICK PARA EDITAR EL PRODUCTO */}
						<i className="far fa-2x fa-edit" style={{ color: "#03989E" }} />
					</div>
				</div>
			</div>
		);
	});
};

ProductosTienda.propTypes = {
	nombre: PropTypes.string
};
