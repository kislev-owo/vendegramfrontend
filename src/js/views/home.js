import React from "react";
import { Buscar } from "../component/Buscar";
import { EtiquetasCard } from "../component/EtiquetasCard";
import "../../styles/home.scss";

export const Home = () => (
	<div className="container">
		<div className="jumbotron ml-5 mr-3 mt-3">
			<div className="text-center mb-2">
				<button type="button" className="btn btn-light btn-sm btn-block border border-info rounded-pill">
					<h3>¿Que estás buscando?</h3>
				</button>

				<div className="mt-1 ">
					<Buscar />
				</div>

				<div className="card-deck d-flex align-items-center">
					<EtiquetasCard />
				</div>
			</div>
		</div>

		<div className="container-fluid">
			<div className="row">
				<div className="col-5">
					<ul className="list-group list-group-flush">
						<li className="list-group-item list-group-item-secondary">Actividad Reciente</li>
						<li className="list-group-item">Kislev se registró como vendedora</li>
						<li className="list-group-item">Oscar acaba de comprar</li>
						<li className="list-group-item">Albany se registró como compradora</li>
					</ul>
				</div>

				<div className="col-5 ml-3 mt-5">
					<a href="#" className="btn btn-primary rounded align-center" style={{ background: "#03989E" }}>
						Ve a nuestro Telegram
						<a href="#" className="badge badge-primary">
							<i className="fa fa-paper-plane" aria-hidden="true" style={{ background: "000000" }} />
						</a>
					</a>
				</div>
			</div>
		</div>
	</div>
);
