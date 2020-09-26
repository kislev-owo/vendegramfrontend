import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Registrate = () => {
	return (
		<div className="container justify-content-center my-5 formreg rounded " style={{ background: "#c4c4c4" }}>
			<form>
				<div className=" text-center rounded-top head" style={{ background: "#03989E" }}>
					<h1 style={{ color: "#ffffff" }}>
						<i className="fas fa-user-circle  mx-2" style={{ color: "#ffffff" }} />
						{`Registrate`}
					</h1>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">{`Nombre de usuario`}</label>
					<input
						type="text"
						className="form-control rounded-lg"
						id="exampleInputEmail1"
						aria-describedby="nombreHelp"
					/>
					<small id="nombreHelp" className="form-text text-muted">
						{"We'll never share your email with anyone else."}
					</small>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">{`Email address`}</label>
					<input
						type="email"
						className="form-control rounded-lg"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					<small id="emailHelp" className="form-text text-muted">
						{"We'll never share your email with anyone else."}
					</small>
				</div>
				<div className="form-group">
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
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">{`Confirmar contraseña`}</label>
					<input type="password" className="form-control rounded-lg" id="exampleInputEmail1" />
				</div>

				<div className="form-group form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" htmlFor="exampleCheck1">
						{"Acepto los términos y condiciones"}
					</label>
				</div>

				<div>
					<button type="submit" className="btn btn-primary mr-auto p-2" style={{ background: "#03989E" }}>
						{"Soy Comprador"}
					</button>
					<button type="submit" className="btn btn-primary p-2" style={{ background: "#03989E" }}>
						{"Soy Vendedor"}
					</button>
				</div>
			</form>
		</div>
	);
};
