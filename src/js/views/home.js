import React from "react";
import { Buscar } from "../component/Buscar";
import { Etiquetas } from "../component/Etiquetas";
import "../../styles/home.scss";

export const Home = () => (
	<div className="container">
		<div className="text-center mt-5">
			<h1>¿Que estás buscando?</h1>

			<div>
				<Buscar />
			</div>

			<div className="card-deck d-flex align-items-center">
				<Etiquetas />
			</div>

			<div className="row">
				<div className="col-6">
					<ul className="list-group list-group-flush">
						<li className="list-group-item list-group-item-secondary">Actividad Reciente</li>
						<li className="list-group-item">Kislev se registró como vendedora</li>
						<li className="list-group-item">Oscar acaba de comprar</li>
						<li className="list-group-item">Albany se registró como compradora</li>
					</ul>
				</div>

				<div className="col-4 ml-3 mt-5">
					<a href="#" className="btn btn-success align-center">
						Ve a nuestro Telegram
						<a href="#" className="badge badge-success">
							<i className="fa fa-paper-plane" aria-hidden="true" />
						</a>
					</a>
				</div>
			</div>
		</div>
	</div>
);
