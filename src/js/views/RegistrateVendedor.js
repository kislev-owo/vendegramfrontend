import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const RegistrateVendedor = () => {
	const { store, actions } = useContext(Context);
	const [datos, setDatos] = useState({
		correo: store.datos_registro.correo,
		numero: "",
		codigo: "",
		clave: "",
		nombre_tienda: store.datos_registro.nombre_tienda,
		nombre: store.datos_registro.nombre,
		apellido: store.datos_registro.apellido,
		nombre_usuario: store.datos_registro.nombre_usuario,
		fecha_nacimiento: store.datos_registro.fecha_nacimiento,
		administrador: false,
		foto_perfil: "",
		subscripcion: false
	});
	return (
		<div
			className="container  justify-content-center my-5  rounded  px-0"
			style={{ background: "#c4c4c4", border_radius: "25px" }}>
			<div className="row justify-content-center">
				<form className="col-6">
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
							value={datos.nombre_tienda}
							id="exampleInputEmail1"
							onChange={e => {
								setDatos({ ...datos, nombre_tienda: e.target.value });
							}}
							aria-describedby="nombreTiendaHelp"
						/>
						<small id="nombreTiendaHelp" className="form-text text-muted">
							{"Por ejemplo: Hamburguesas 3000"}
						</small>
					</div>
				</form>
			</div>
			<div className="row justify-content-center ">
				<Link
					type="submit"
					to="/plan"
					onClick={() => {
						actions.datosRegistro(datos);
					}}
					className="btn btn-primary my-3   "
					style={{ background: "#03989E", border: "none" }}>
					{"Continuar"}
				</Link>
			</div>
		</div>
	);
};
