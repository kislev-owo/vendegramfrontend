import React, { useState, useEffect, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Productos = ({ title, idToRender, data }) => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	let productos = ["name", "imagen", "description", "precio", "cantidad", "categorias"];

	return (
		<div className="jumbotron">
			<h1 className="display-4" />
			<div className=" scrolling-wrapper row flex-row wrapper flex-nowrap mt-4 pb-4">
				{store[title.toLowerCase()].map((item, index) => {
					if (index == idToRender) {
						return (
							<div key={index} className="container mt-2">
								<div className="card mb-3">
									<div className="row no-gutters">
										<div className="col-md-4">
											<img
												src="https://via.placeholder.com/800x600"
												className="card-img"
												alt="..."
											/>
										</div>
										<div className="col-md-8">
											<div className="card-body">
												<h5 className="card-title">{item.name}</h5>
												<p className="card-text">texto de ...</p>
											</div>
										</div>
									</div>
								</div>
								<div className="row more-info">
									<div className="col">
										<h3>Name</h3>
										<p>{item.name}</p>
									</div>
									<div className="col">
										<h3>{opciones[0]}</h3>
										<p>{item.climate || item.gender || item.model}</p>
									</div>
									<div className="col">
										<h3>{opciones[1]}</h3>
										<p>{item.population || item.height || item.manufacturer}</p>
									</div>
									<div className="col">
										<h3>{opciones[2]}</h3>
										<p>{item.terrain || item.birth_year || item.cost_in_credits}</p>
									</div>
									<div className="col">
										<h3>{opciones[3]}</h3>
										<p>{item.gravity || item.mass || item.length}</p>
									</div>
									<div className="col">
										<h3>{opciones[4]}</h3>
										<p>{item.diameter || item.eye_color || item.max_atmosphering_speed}</p>
									</div>
								</div>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
};

Productos.propTypes = {
	title: PropTypes.string,
	item: PropTypes.array,
	data: PropTypes.array,
	type: PropTypes.string,
	idToRender: PropTypes.any
};
