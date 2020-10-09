import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Buscar } from "../component/Buscar";
import { Zona } from "../component/Zonas";
import { ProductosTienda } from "../component/ProductosTienda";

export const PerfilComprador = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [productoABuscar, setProductoABuscar] = useState("");
	const [zonaABuscar, setZonaABuscar] = useState("");
	const [etiquetaABuscar, setEtiquetaABuscar] = useState("");
	const [etiquetaGeneralABuscar, setEtiquetaGeneralABuscar] = useState("");
	//	const { tiendaId } = useParams();
	return (
		<div className="container">
			<h2 className="text-center mt-1 ml-4 mb-3 m-auto">
				<span className="badge badge-pill badge-info border" style={{ background: "#03989E" }}>
					Realiza tu primera búsqueda
				</span>
			</h2>

			<div className="row justify-content-center mt-3">
				<div className="col-4 ">
					<div className="row ">
						<img
							src="https://www.cloudraxak.com/wp-content/uploads/2017/03/profile-pic-placeholder.png"
							style={{ borderRadius: "75%", width: "120px", height: "120px" }}
						/>
					</div>
					<div className="row">
						<h2>{`Nombre del Comprador`}</h2>
					</div>
				</div>
				<div className="col-8">
					<div className="row">
						<div className="col-5">
							<p>
								<i className="fas fa-phone-alt mx-2" style={{ color: "#03989E" }} />
								{`Telefono`}
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-4">
							<p>
								<i className="fab fa-facebook mx-2" style={{ color: "#03989E" }} />
								{`Facebook`}
							</p>
						</div>
						<div className="col-4">
							<p>
								<i className="fab fa-twitter mx-2" style={{ color: "#03989E" }} />
								{`Twitter`}
							</p>
						</div>
						<div className="col-4">
							<p>
								<i className="fab fa-instagram mx-2" style={{ color: "#03989E" }} />
								{`Instagram`}
							</p>
						</div>
					</div>
					<div className="row ">
						<div className="m-auto">
							<h5 className="m-auto">{`Tiendas Favoritas`}</h5>
							<div className="list-group-flush">
								<a href="#" className="list-group-item">
									Hamburguesas 3000
								</a>
								<a href="#" className="list-group-item ">
									De todo como en Botica
								</a>
								<a href="#" className="list-group-item ">
									Arregla tu PC
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
