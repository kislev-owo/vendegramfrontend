import React from "react";
import { Link, useParams } from "react-router-dom";

import { Zona } from "../component/Zonas";
import { ProductosTienda } from "../component/ProductosTienda";
export const PerfilVendedor = () => {
	const { tiendaId } = useParams();
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-4 ">
					<div className="row ">
						<img
							src="https://www.cloudraxak.com/wp-content/uploads/2017/03/profile-pic-placeholder.png"
							style={{ borderRadius: "75%", width: "120px", height: "120px" }}
						/>
					</div>
					<div className="row">
						<h2>{`Nombre del vendedor`}</h2>
					</div>
				</div>
				<div className="col-8">
					<div className="row">
						<h3>
							<i className="far fa-id-card mx-2" style={{ color: "#03989E" }} />
							{`Información de tu tienda`}
						</h3>
					</div>
					<div className="row">
						<div className="col-5">
							<p>
								<i className="fas fa-phone-alt mx-2" style={{ color: "#03989E" }} />
								{`Telefono`}
							</p>
						</div>
						<div className="col-7">
							<p>
								<i className="fas fa-map-marker-alt mx-2" style={{ color: "#03989E" }} />
								{`Zona`}
							</p>
							<Zona />
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
						<p>{`Descripción de la tienda`}</p>
					</div>
					<div className="row">
						<ProductosTienda nombre={tiendaId} />
					</div>
				</div>
			</div>
		</div>
	);
};
