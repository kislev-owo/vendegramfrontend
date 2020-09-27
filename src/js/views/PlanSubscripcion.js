import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const PlanSubscripcion = () => {
	return (
		<div>
			<div className="row justify-content-center my-5">
				<div className="col-4">
					<div className="text-center rounded-top" style={{ background: "#03989E" }}>
						<h1 style={{ color: "#ffffff" }}>
							<i className="fas fa-user-circle  mx-2 my-2" style={{ color: "#ffffff" }} />
							{`Plan Free`}
						</h1>
					</div>
					<div className="text-center rounded-top" style={{ background: "#c4c4c4" }}>
						<ul>
							<li>
								<p style={{ color: "#ffffff" }}>{`-Permite asociar una zona de entrega`}</p>
							</li>
							<p style={{ color: "#ffffff" }}>{`-Permite publicar 3 productos o servicios`}</p>
							<li>
								<p style={{ color: "#ffffff" }}>
									{`-Incluye visualización de comentarios y calificaciones`}
								</p>
							</li>
							<li>
								<p style={{ color: "#ffffff" }}>{`-Incluye aparición en las búsquedas por telegram`}</p>
							</li>
						</ul>
						<Link
							type="submit"
							className="btn btn-primary my-3"
							to="/resumen-informacion"
							style={{ background: "#03989E", border: "none" }}>
							{"$0 *tarifa mensual"}
						</Link>
					</div>
				</div>

				<div className="col-4">
					<div className="text-center rounded-top" style={{ background: "#03989E" }}>
						<h1 style={{ color: "#ffffff" }}>
							<i className="fas fa-user-circle  mx-2 my-2" style={{ color: "#ffffff" }} />
							{`Plan Básico`}
						</h1>
					</div>
					<div className="text-center rounded-top" style={{ background: "#c4c4c4" }}>
						<ul>
							<li>
								<p style={{ color: "#ffffff" }}>{`-Permite asociar tres zonas de entrega`}</p>
							</li>
							<p style={{ color: "#ffffff" }}>{`-Permite publicar 10 productos o servicios`}</p>
							<li>
								<p style={{ color: "#ffffff" }}>
									{`-Incluye visualización de comentarios y calificaciones`}
								</p>
							</li>
							<li>
								<p style={{ color: "#ffffff" }}>{`-Incluye aparición en las búsquedas por telegram`}</p>
							</li>
							<li>
								<p style={{ color: "#ffffff" }}>{`-Incluye la visualización de reportes de ventas`}</p>
							</li>
						</ul>
						<Link
							type="submit"
							className="btn btn-primary my-3"
							to="/confirmar-pago"
							style={{ background: "#03989E", border: "none" }}>
							{"$5 *tarifa mensual"}
						</Link>
					</div>
				</div>
			</div>
			<div className="row justify-content-center my-5">
				<Link
					type="submit"
					className="btn btn-primary my-3"
					to="/resumen-informacion"
					style={{ background: "#03989E", border: "none" }}>
					{"Hacer esto luego"}
				</Link>
			</div>
		</div>
	);
};
