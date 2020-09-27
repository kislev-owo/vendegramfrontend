import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const RegistrateVendedor = () => {
	return (
		<div
			className="container  justify-content-center my-5  rounded  px-0"
			style={{ background: "#c4c4c4", border_radius: "25px" }}>
			<form className=" justify-content-center">
				<div className="text-center rounded-top " style={{ background: "#03989E" }}>
					<h1 style={{ color: "#ffffff" }}>
						<i className="fas fa-user-circle  mx-2 my-2" style={{ color: "#ffffff" }} />
						{`Bienvenido`}
					</h1>
				</div>
				<div className="form-group px-3">
					<label htmlFor="exampleInputEmail1">{`Nombre de tu tienda o emprendimiento`}</label>
					<input
						type="text"
						className="form-control rounded-lg"
						id="exampleInputEmail1"
						aria-describedby="nombreTiendaHelp"
					/>
					<small id="nombreTiendaHelp" className="form-text text-muted">
						{"Por ejemplo: Hamburguesas 3000"}
					</small>
				</div>

				<Link
					type="submit"
					to="/plan"
					className="btn btn-primary my-3  justify-content-center "
					style={{ background: "#03989E", border: "none" }}>
					{"Continuar"}
				</Link>
			</form>
		</div>
	);
};
