import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Home } from "../views/home.js";
import { Buscar } from "./Buscar";
import { Context } from "../store/appContext";

export const Navbar = () => {
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
		<>
			<nav className="navbar navbar-expand-lg navbar-light ">
				<div className="row mr-auto p-2">
					<Link className="navbar-brand " to="/" href="#">
						<img
							src={`https://res.cloudinary.com/vendegram/image/upload/v1602723366/logo_d80dzm.png`}
							width="80"
							height="80"
							alt=""
							to="/"
							loading="lazy"
						/>
					</Link>
					<div>
						<div>
							<a className="navbar-brand" href="#" style={{ fontSize: "25px" }}>
								Vendegram
							</a>
						</div>
						<div>
							<span className="navbar-brand">Tu vendedor de confianza</span>
						</div>
					</div>
				</div>
				<div className="p-2">
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item ">
								<Link className="nav-link" href="#" to="/">
									Inicio
									{/*  <span className="sr-only">(current)</span> */}
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" href="#" to="/ComoFunciona">
									¿Cómo Funciona?
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" href="#" to="/Contactanos">
									Contáctanos
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/nosotros" className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
									Desarrolladores
								</Link>
							</li>

							<li className="nav-item">
								{store.token != null ? (
									<>
										<Link
											onClick={() => actions.salir()}
											to="/"
											type="button"
											href="#"
											tabIndex="-1"
											aria-disabled="true"
											className="nav-link">
											{"Salir"}
										</Link>
									</>
								) : (
									<Link
										className="nav-link"
										href="#"
										tabIndex="-1"
										aria-disabled="true"
										to="/ingresar">
										{" Ingresar"}
									</Link>
								)}
							</li>

							<li className="nav-item">
								{store.token != null ? (
									<Link />
								) : (
									<Link
										className="nav-link"
										href="#"
										tabIndex="-1"
										aria-disabled="true"
										to="/registrate">
										{" Registrate"}
									</Link>
								)}
							</li>

							<li className="nav-item">
								{store.token != null ? (
									<Link
										className="nav-link"
										href="#"
										tabIndex="-1"
										aria-disabled="true"
										to="/perfil-vendedor">
										{" Mi Perfil"}
									</Link>
								) : (
									<Link />
								)}
							</li>

							{/* <li className="nav-item">
								<Link className="nav-link" href="#" tabIndex="-1" aria-disabled="true" to="/registrate">
									{" Registrate"}
								</Link>
							</li> */}

							{/* <li className="nav-item">
								<Link className="nav-link" href="#" tabIndex="-1" aria-disabled="true" to="/registrate">
									{" Registrate"}
								</Link>
							</li>


							<li className="nav-item">
								<Link to="/ingresar" className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
									Ingresa
								</Link>
							</li> */}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
