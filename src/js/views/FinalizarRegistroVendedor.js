import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const FinalizarRegistroVendedor = () => {
	return (
		<div>
			<div className="container   my-5  rounded  px-0">
				<div className="row justify-content-center">
					<h1 style={{ color: "#000000" }}>{`Gracias por tu compra`}</h1>
				</div>
				<div className="row text-wrap justify-content-center">
					<h2 style={{ color: "#000000" }}>{`Tu pago será procesado en las próximas 24h`}</h2>
				</div>
			</div>
			<div className="row  justify-content-center  ">
				<Link
					type="submit"
					to="/"
					className="btn btn-primary my-3 "
					style={{ background: "#03989E", border: "none" }}>
					{"Continuar"}
				</Link>
			</div>
		</div>
	);
};
