import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Contactanos = () => {
	return (
		<div
			className="container  justify-content-center my-5  rounded  px-0"
			style={{ background: "#c4c4c4", border_radius: "25px" }}>
			<form>
				<div className="text-center rounded-top" style={{ background: "#03989E" }}>
					<h1 style={{ color: "#ffffff" }}>{`Contáctanos`}</h1>
				</div>
				<div className="form-group px-3">
					<label htmlFor="exampleInputEmail1">{`Nombre`}</label>
					<input
						type="text"
						className="form-control rounded-lg"
						id="exampleInputEmail1"
						aria-describedby="nombreHelp"
					/>
					<small id="nombreHelp" className="form-text text-muted">
						{"Por ejemplo: Pedro"}
					</small>
				</div>
				<div className="form-group px-3">
					<label htmlFor="exampleInputEmail1">{`Apellido`}</label>
					<input
						type="text"
						className="form-control rounded-lg"
						id="exampleInputEmail1"
						aria-describedby="apellidoHelp"
					/>
					<small id="apellidoHelp" className="form-text text-muted">
						{"Por ejemplo: Pérez"}
					</small>
				</div>

				<div className="form-group px-3">
					<label htmlFor="exampleInputEmail1">{`Correo electrónico`}</label>
					<input
						type="email"
						className="form-control rounded-lg"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					<small id="emailHelp" className="form-text text-muted">
						{"Ejemplo: vendegram@gmail.com"}
					</small>
				</div>
				<div className="form-group px-3">
					<label htmlFor="exampleInputEmail1">{`Mensaje`}</label>
					<input type="text" className="form-control rounded-lg" id="exampleInputEmail1" />
				</div>
				<div className="justify-content-around d-flex">
					<Link
						type="submit"
						className="btn btn-primary my-3"
						to="/"
						style={{ background: "#03989E", border: "none" }}>
						{"Enviar"}
					</Link>
				</div>
			</form>
		</div>
	);
};
