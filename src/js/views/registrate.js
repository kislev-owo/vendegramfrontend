import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Registrate = () => {
	return (
		<div
			className="container  justify-content-center my-5  rounded  px-0"
			style={{ background: "#c4c4c4", border_radius: "25px" }}>
			<form>
				<div className="text-center rounded-top" style={{ background: "#03989E" }}>
					<h1 style={{ color: "#ffffff" }}>
						<i className="fas fa-user-circle  mx-2 my-2" style={{ color: "#ffffff" }} />
						{`Registrate`}
					</h1>
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
				<label className="px-3" htmlFor="inlineFormCustomSelect">{`Introduzca su número telefónico`}</label>
				<div className="form-row align-items-center">
					<div className="col-auto my-1 px-3">
						<select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
							<option selected>{`Escoja`}</option>
							<option value="1">{`0412`}</option>
							<option value="1">{`0414`}</option>
							<option value="1">{`0416`}</option>
							<option value="1">{`0424`}</option>
							<option value="1">{`0426`}</option>
							<option value="1">{`0212`}</option>
						</select>
					</div>
					<div className="col-auto my-1 px-3">
						<label className="" htmlFor="inlineFormCustomSelect">{``}</label>
						<input
							type="text"
							className="form-control rounded-lg"
							id="exampleInputEmail1"
							aria-describedby="telefonoHelp"
						/>
						<small id="telefonoHelp" className="form-text text-muted">
							{"Por ejemplo: 0412 123 45 67"}
						</small>
					</div>
				</div>

				<div className="form-group px-3">
					<label htmlFor="exampleInputEmail1">{`Nombre de usuario`}</label>
					<input
						type="text"
						className="form-control rounded-lg"
						id="exampleInputEmail1"
						aria-describedby="nombreuHelp"
					/>
					<small id="nombreuHelp" className="form-text text-muted">
						{"Con este nombre podrán encontrarle los demás usuarios de Vendegram"}
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
					<label htmlFor="exampleInputEmail1">{`Contraseña`}</label>
					<input
						type="password"
						className="form-control rounded-lg"
						id="exampleInputEmail1"
						aria-describedby="contrasenaHelp"
					/>
					<small id="contrasenaHelp" className="form-text text-muted">
						{"La contraseña debe contener un caracter especial, una mayúscula, una minúscula y un número"}
					</small>
				</div>
				<div className="form-group px-3">
					<label htmlFor="exampleInputEmail1">{`Confirmar contraseña`}</label>
					<input type="password" className="form-control rounded-lg" id="exampleInputEmail1" />
				</div>
				<div className="form-group px-3">
					<label htmlFor="exampleInputEmail1">{`Fecha de nacimiento`}</label>
					<input type="password" className="form-control rounded-lg" id="exampleInputEmail1" />
				</div>
				<div className="form-group form-check text-center">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" htmlFor="exampleCheck1">
						<Link to="/condiciones">{"Acepto los términos y condiciones"}</Link>
					</label>
				</div>

				<div className="justify-content-around d-flex">
					<Link
						type="submit"
						to="/resumen-informacion"
						className="btn btn-primary my-3 "
						style={{ background: "#03989E", border: "none" }}>
						{"Soy Comprador"}
					</Link>

					<Link
						type="submit"
						className="btn btn-primary my-3"
						to="/reg-vendedor"
						style={{ background: "#03989E", border: "none" }}>
						{"Soy Vendedor"}
					</Link>
				</div>
			</form>
		</div>
	);
};
