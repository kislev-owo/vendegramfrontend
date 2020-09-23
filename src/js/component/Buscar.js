import React from "react";

import "../../styles/home.scss";

// Función Buscar para generar los inputs de búsqueda de Producos en General y por Zona
export const Buscar = () => (
	<div className="row">
		{
			// Input de búsqueda general de Productos
		}
		<div className="input-group mb-3 col-8">
			<input
				type="text"
				className="form-control"
				placeholder="Escribir búsqueda"
				aria-label="Recipient's username"
				aria-describedby="basic-addon2"
			/>
			<a href="#" className="badge badge-light">
				<i className="fa fa-search" aria-hidden="true" />
			</a>

			<div className="input-group-append">
				<button
					className="btn btn-outline-secondary"
					type="button"
					id="button-addon2"
					onClick="{e => buscarProducto()}">
					{"Buscar"}
				</button>
			</div>
		</div>

		{
			// Input de Búsqueda por Zona
		}
		<div className="input-group mb-3 col-4">
			<input type="text" className="form-control" aria-label="Text input with dropdown button" />
			<div className="input-group-append">
				<button
					className="btn btn-outline-secondary dropdown-toggle"
					type="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Zonas
				</button>
				<div className="dropdown-menu">
					<a className="dropdown-item" href="#">
						Altamira
					</a>
					<a className="dropdown-item" href="#">
						Las Mercedes
					</a>
					<a className="dropdown-item" href="#">
						Los Palos Grandes
					</a>
				</div>
			</div>
		</div>
	</div>
);
