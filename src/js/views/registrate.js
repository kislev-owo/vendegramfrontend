import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Registrate = () => {
	const { store, actions } = useContext(Context);
	const [cont2, setCont2] = useState("");
	const [cont1, setCont1] = useState("");
	const [datos, setDatos] = useState({
		correo: store.correo,
		numero: "",
		codigo: "",
		clave: "",
		nombre: store.nombre,
		apellido: store.apellido,
		nombre_usuario: store.nombre_usuario,
		fecha_nacimiento: store.fecha_nacimiento,
		administrador: false,
		foto_perfil: "",
		subscripcion: false
	});

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
						value={datos.nombre}
						onChange={e => {
							setDatos({ ...datos, nombre: e.target.value });
						}}
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
						value={datos.apellido}
						onChange={e => {
							setDatos({ ...datos, apellido: e.target.value });
						}}
					/>
					<small id="apellidoHelp" className="form-text text-muted">
						{"Por ejemplo: Pérez"}
					</small>
				</div>
				<label className="px-3" htmlFor="inlineFormCustomSelect">{`Introduzca su número telefónico`}</label>
				<div className="form-row align-items-center">
					<div className="col-auto my-1 px-3">
						<select
							className="custom-select mr-sm-2"
							id="inlineFormCustomSelect"
							onChange={e => {
								setDatos({ ...datos, codigo: e.target.value });
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
								setDatos({ ...datos, numero: telf });
							}}
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
						value={datos.nombre_usuario}
						onChange={e => {
							setDatos({ ...datos, nombre_usuario: e.target.value });
						}}
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
						value={datos.correo}
						onChange={e => {
							setDatos({ ...datos, correo: e.target.value });
						}}
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
						value={cont1}
						onChange={e => {
							if (datos.clave != "") {
								setDatos({ ...datos, clave: "" });
							} else {
								if (e.target.value == cont2 && cont2 != "") {
									setDatos({ ...datos, clave: e.target.value });
								}
							}
							setCont1(e.target.value);
						}}
					/>
					<small id="contrasenaHelp" className="form-text text-muted">
						{"La contraseña debe contener un caracter especial, una mayúscula, una minúscula y un número"}
					</small>
				</div>
				<div className="form-group px-3">
					<label htmlFor="exampleInputEmail1">{`Confirmar contraseña`}</label>
					<input
						type="password"
						className="form-control rounded-lg"
						id="exampleInputEmail1"
						value={cont2}
						onChange={e => {
							if (e.target.value == cont1) {
								setDatos({ ...datos, clave: e.target.value });
							} else {
								if (datos.clave != "") {
									setDatos({ ...datos, clave: "" });
								}
							}
							setCont2(e.target.value);
						}}
					/>
				</div>
				<div className="form-group px-3">
					<label htmlFor="exampleInputEmail1">{`Fecha de nacimiento`}</label>
					<input
						type="text"
						className="form-control rounded-lg"
						id="fechaHelp"
						value={datos.fecha_nacimiento}
						onChange={e => {
							setDatos({ ...datos, fecha_nacimiento: e.target.value });
						}}
					/>
					<small id="fechaHelp" className="form-text text-muted">
						{"Por ejemplo: año-mes-día 1990-12-31"}
					</small>
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
						className="btn btn-primary my-3"
						to="/reg-vendedor"
						onClick={() => {
							actions.datosRegistroUsuario(datos);
						}}
						style={{ background: "#03989E", border: "none" }}>
						{"Continuar"}
					</Link>
				</div>
			</form>
		</div>
	);
};
