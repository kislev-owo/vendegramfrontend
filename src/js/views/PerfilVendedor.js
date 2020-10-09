import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Zona } from "../component/Zonas";
import { ProductosTienda } from "../component/ProductosTienda";
import { useEffect } from "react";
import { Context } from "../store/appContext";

export const PerfilVendedor = () => {
	const { tiendaId } = useParams();
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="row ">
				<div className="col-4 ">
					<div className="row justify-content-center ">
						<img
							src="https://www.cloudraxak.com/wp-content/uploads/2017/03/profile-pic-placeholder.png"
							style={{ borderRadius: "75%", height: "120px" }}
						/>
					</div>
					<div className="row justify-content-center">
						<h2>{`${store.tiendas[tiendaId].nombre_usuario}`}</h2>
					</div>
				</div>
				<div className="col-8">
					<div className="row justify-content-center">
						<h3>
							<i className="far fa-id-card mx-2" style={{ color: "#03989E" }} />
							{`Información de tu tienda`}
						</h3>
					</div>
					<div className="row justify-content-center">
						<div className="col-5">
							<p>
								<i className="fas fa-phone-alt mx-2" style={{ color: "#03989E" }} />
								{`${store.tiendas[tiendaId].telefono_tienda}`}
							</p>
						</div>
						<div className="col-7">
							<label>
								<i className="fas fa-truck mx-2" style={{ color: "#03989E" }} />
								{`Zonas de entrega`}
							</label>
							<div className="row justify-content-center">
								<p>
									<i className="fas fa-map-marker-alt mx-2" style={{ color: "#03989E" }} />
									{`${store.tiendas[tiendaId].zona_uno}`}
								</p>
							</div>
							<div className="row justify-content-center">
								<p>
									<i className="fas fa-map-marker-alt mx-2" style={{ color: "#03989E" }} />
									{`${store.tiendas[tiendaId].zona_dos}`}
								</p>
							</div>
							<div className="row justify-content-center">
								<p>
									<i className="fas fa-map-marker-alt mx-2" style={{ color: "#03989E" }} />
									{`${store.tiendas[tiendaId].zona_tres}`}
								</p>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-4">
							<p>
								<i className="fab fa-facebook mx-2" style={{ color: "#03989E" }} />
								{`${store.tiendas[tiendaId].facebook_tienda}`}
							</p>
						</div>
						<div className="col-4">
							<p>
								<i className="fab fa-twitter mx-2" style={{ color: "#03989E" }} />
								{`${store.tiendas[tiendaId].twitter_tienda}`}
							</p>
						</div>
						<div className="col-4">
							<p>
								<i className="fab fa-instagram mx-2" style={{ color: "#03989E" }} />
								{`${store.tiendas[tiendaId].instagram_tienda}`}
							</p>
						</div>
					</div>
					<div className="row ">
						<p>{`Descripción de la tienda`}</p>
					</div>
				</div>
			</div>
			<div className="row my-5">
				<div className="scrollmenu d-flex" style={{ overflow: "auto", whiteSpace: "nowrap" }}>
					<ProductosTienda nombre={tiendaId} />
				</div>
			</div>
		</div>
	);
};
