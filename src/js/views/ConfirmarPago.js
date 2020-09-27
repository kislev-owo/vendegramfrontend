import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ConfirmarPago = () => {
	return (
		<div className="container">
			<div className="row  justify-content-center">
				<h1>{`Confirma tu pago`}</h1>
			</div>
			<div className="row  justify-content-center">
				<div className="col-auto">
					<div className="text-center rounded-top" style={{ background: "#03989E" }}>
						<h1 style={{ color: "#ffffff" }}>
							<i className="fas fa-user-circle  mx-2 my-2" style={{ color: "#ffffff" }} />
							{`Datos`}
						</h1>
					</div>
					<div className="text-center rounded-top mx-2" style={{ background: "#c4c4c4" }}>
						<h2 style={{ color: "#ffffff" }}>
							<i className="fas fa-dollar-sign mx-2" style={{ color: "#03989E" }} />
							{`vendegram@gmail.com`}
						</h2>

						<h2 style={{ color: "#ffffff" }}>{`Pago Movil Banesco`}</h2>

						<Link
							type="submit"
							className="btn btn-primary my-3"
							to="/finalizar-registro-vendedor"
							style={{ background: "#03989E", border: "none" }}>
							{"Sube el comprobante"}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
