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
	const [tienda, setTienda] = useState({
		correo_tienda: "",
		facebook_tienda: "",
		codigo: "",
		numero: "",
		foto_tienda: "",
		instagram_tienda: "",
		nombre_tienda: "",
		correo_tienda: "",
		twitter_tienda: "",
		zona_dos: "",
		zona_general: "",
		zona_tres: "",
		zona_uno: ""
	});
	return (
		<div
			className="container  justify-content-center my-5  rounded  px-0"
			style={{ background: "#c4c4c4", border_radius: "25px" }}>
			<div className="row justify-content-center">
				<form className="col-12">
					<div className="text-center rounded-top " style={{ background: "#03989E" }}>
						<h1 style={{ color: "#ffffff" }}>
							<i className="fas fa-user-circle  mx-2 my-2" style={{ color: "#ffffff" }} />
							{`Bienvenido ${store.datos_registro.nombre}! `}
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
								setTienda({ ...tienda, nombre_tienda: e.target.value });
							}}
							aria-describedby="nombreTiendaHelp"
						/>
						<small id="nombreTiendaHelp" className="form-text text-muted">
							{"Por ejemplo: Hamburguesas 3000"}
						</small>
					</div>
					<label className="px-3" htmlFor="inlineFormCustomSelect">{`Introduzca su número telefónico`}</label>
					<div className="form-row align-items-center">
						<div className="col-auto my-1 px-3">
							<select
								className="custom-select mr-sm-2"
								id="inlineFormCustomSelect"
								onChange={e => {
									setTienda({ ...tienda, codigo: e.target.value });
								}}>
								<option selected>{`Escoja`}</option>
								<option value="0412">{`0412`}</option>
								<option value="0414">{`0414`}</option>
								<option value="0416">{`0416`}</option>
								<option value="0424">{`0424`}</option>
								<option value="0426">{`0426`}</option>
								<option value="0212">{`0212`}</option>
							</select>
						</div>
						<div className="col-auto my-1 px-3">
							<label className="" htmlFor="inlineFormCustomSelect">{``}</label>
							<input
								type="text"
								className="form-control rounded-lg"
								id="exampleInputEmail1"
								aria-describedby="telefonoHelp"
								//value={datos.telefono}
								onChange={e => {
									let telf = e.target.value;
									setTienda({ ...tienda, numero: telf });
								}}
							/>
							<small id="telefonoHelp" className="form-text text-muted">
								{"Por ejemplo: 0412 123 45 67"}
							</small>
						</div>
					</div>

					<div className="form-group px-3">
						<label htmlFor="exampleInputEmail1">{`Correo de la Tienda`}</label>
						<input
							type="text"
							className="form-control rounded-lg"
							value={tienda.correo_tienda}
							id="exampleInputEmail1"
							onChange={e => {
								setTienda({ ...tienda, correo_tienda: e.target.value });
							}}
							aria-describedby="correoTiendaHelp"
						/>
						<small id="correoTiendaHelp" className="form-text text-muted">
							{""}
						</small>
					</div>
					<div className="form-group px-3">
						<label htmlFor="exampleInputEmail1">{`Facebook de la tienda`}</label>
						<input
							type="text"
							className="form-control rounded-lg"
							value={tienda.facebook_tienda}
							id="exampleInputEmail1"
							onChange={e => {
								setTienda({ ...tienda, facebook_tienda: e.target.value });
							}}
							aria-describedby="facebookTiendaHelp"
						/>
						<small id="facebookTiendaHelp" className="form-text text-muted">
							{""}
						</small>
					</div>
					<div className="form-group px-3">
						<label htmlFor="exampleInputEmail1">{`Instagram de la tienda`}</label>
						<input
							type="text"
							className="form-control rounded-lg"
							value={tienda.instagram_tienda}
							id="exampleInputEmail1"
							onChange={e => {
								setTienda({ ...tienda, instagram_tienda: e.target.value });
							}}
							aria-describedby="facebookTiendaHelp"
						/>
						<small id="instagramTiendaHelp" className="form-text text-muted">
							{""}
						</small>
					</div>
					<div className="form-group px-3">
						<label htmlFor="exampleInputEmail1">{`Twitter de la tienda`}</label>
						<input
							type="text"
							className="form-control rounded-lg"
							value={tienda.twitter_tienda}
							id="exampleInputEmail1"
							onChange={e => {
								setTienda({ ...tienda, twitter_tienda: e.target.value });
							}}
							aria-describedby="facebookTiendaHelp"
						/>
						<small id="twitterTiendaHelp" className="form-text text-muted">
							{""}
						</small>
					</div>
				</form>
			</div>
			<div className="row justify-content-center ">
				<Link
					type="submit"
					to="/plan"
					onClick={e => {
						actions.datosRegistroUsuario(datos);
						actions.datosRegistroTienda(tienda);
					}}
					className="btn btn-primary my-3   "
					style={{ background: "#03989E", border: "none" }}>
					{"Continuar"}
				</Link>
			</div>
		</div>
	);
};
