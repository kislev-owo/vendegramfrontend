import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Buscar } from "../component/Buscar";

import "../../styles/home.scss";

export const DetalleProducto = () => {
	const { store, actions } = useContext(Context);
	const { detallesId } = useParams();

	return (
		<>
			<div>
				<div className="mt-1 ">
					<Buscar />
				</div>
			</div>
			<div className="jumbotron mt-2 pt-4 pb-4">
				<h2 className="text-center mb-2 m-auto">
					<span className="badge badge-pill badge-info border" style={{ background: "#03989E" }}>
						Producto Elegido
					</span>
				</h2>
				{store.productos.map((item, id) => {
					if (item.id === parseInt(detallesId)) {
						return (
							<div key={id} className="container w-50 mt-2">
								<div className="card border-info mb-1 m-auto w-75">
									<div className="no-gutters">
										<div className="col">
											<img
												src="https://via.placeholder.com/500x400"
												className="card-img-top"
												alt="Foto del Producto"
											/>
										</div>
										<div className="">
											<div className="card-body">
												<h5 className="card-title">
													<strong>{item.titulo}</strong>
												</h5>
												<div className="row-flex align-items-center">
													<strong>Cantidad: </strong>
													<span>{item.cantidad}</span>
												</div>
												<div className="row-flex align-items-center">
													<strong>Precio: </strong>

													<span>{item.precio}</span>
												</div>
												<div className="">
													<strong>Descripción:</strong>
													<p>{item.descripcion}</p>
												</div>

												<div className="">
													<strong>Categoría:</strong>
													<p>{item.etiqueta_general}</p>
												</div>
											</div>
											<div className="card-footer m-auto">
												<div>
													<button
														className="btn btn-primary rounded-sm"
														type="button"
														id="button-addon2"
														style={{ background: "#03989E" }}>
														<span className="">Contacto</span>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					}
				})}
			</div>
		</>
	);
};

//export default DetalleProducto;
