import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
//import placeHolder from "../../img/500.png";
import "../../styles/home.scss";

function DetalleProducto() {
	const { store, actions } = useContext(Context);
	const { detallesId } = useParams();

	//

	//	useEffect(() => {
	//		if (store.people.length == 0) {
	//			actions.fetchPersonajes();
	//		}
	//	}, []);

	return (
		<>
			{store.productos.map((item, index) => {
				if (index === parseInt(detallesId)) {
					return (
						<div key={index} className="container mt-2">
							<div className="card mb-3">
								<div className="row no-gutters">
									<div className="col-md-4">
										<img
											src="https://via.placeholder.com/500x400"
											className="card-img-top"
											alt="Foto del Producto"
										/>
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">{item.titulo}</h5>
										</div>
										<div className="col">
											<h5>Producto:</h5>
											<p>{item.titulo}</p>
										</div>

										<div className="col">
											<h5>Precio:</h5>
											<p>{item.precio}</p>
										</div>

										<div className="col">
											<h5>Categorías:</h5>
											<p>{item.etiqueta1}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}
			})}
		</>
	);
}

export default DetalleProducto;
