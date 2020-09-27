import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Condiciones = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="jumbotron  my-5 mx-5" style={{ background: "#c4c4c4" }}>
			<h1 className="display-4">{`Términos y Condiciones del servicio`}</h1>
			<p className="lead">{`This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.`}</p>
			<hr className="my-4" />
			<p>{`It uses utility classes for typography and spacing to space content out within the larger container.`}</p>
			<p className="lead">
				<Link
					className="btn btn-primary btn-lg"
					style={{ background: "#03989E", border: "none" }}
					href="#"
					role="button"
					to="/registrate">{`Volver`}</Link>
			</p>
		</div>
	);
};
