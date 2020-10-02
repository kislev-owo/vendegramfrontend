import React, { useState, useEffect, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import vendedor from "../../img/Vendegram-Vendedor.png";
import comprador from "../../img/Vendegram-Comprador.png";

export const ComoFunciona = () => {
	return (
		<div className="container">
			<div className="jumbotron ml-3 mr-3 mt-2 pt-4">
				<div className="text-center mb-2">
					<button
						type="button"
						className="btn btn-light btn-sm btn-block border border-info rounded-pill mb-4">
						<h3>¿Cómo funciona Vendegram?</h3>
					</button>

					<div className="card mb-3 mt-3">
						<img src={vendedor} className="card-img-top" alt="Imagen de Como Funciona Vendedor" />
						<div className="card-body">
							<button
								className="btn btn-primary rounded-sm"
								type="button"
								id="button-addon2"
								style={{ background: "#03989E" }}>
								<h6 className="card-title">Vendedor</h6>
							</button>
						</div>
					</div>

					<div className="card mb-3 mt-3">
						<img src={comprador} className="card-img-top" alt="Imagen de Como Funciona Comprador" />
						<div className="card-body">
							<button
								className="btn btn-primary rounded-sm"
								type="button"
								id="button-addon2"
								style={{ background: "#03989E" }}>
								<h6 className="card-title">Comprador</h6>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
