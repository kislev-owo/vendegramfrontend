import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3" style={{ background: "#C4C4C4" }}>
		<div className="container-fluid">
			<div className="row ">
				<div className="col-4 text-center">
					<div className="row justify-content-center">{"Elaborado por:"}</div>
					<div className="row justify-content-center">{"Kislev"}</div>
					<div className="row justify-content-center">{"Albany"}</div>
					<div className="row justify-content-center">{"Oscar"}</div>
					<div className="row justify-content-center">{"Francisco"}</div>
				</div>

				<div className="col-4 text-center">
					<div className="row justify-content-center">
						<button
							type="button"
							className="btn btn-primary rounded-lg"
							style={{ background: "#03989E", border: "none" }}>
							<i className="fas fa-question-circle mx-2" style={{ background: "000000" }} />
							{`Preguntas Frecuentes`}
						</button>
					</div>
					<div className="row justify-content-center">0212-2575258</div>
					<div className="row justify-content-center">vendegram@gmail.com</div>
				</div>

				<div className="col-4 ">
					<div className="row justify-content-center">
						<i className="fab fa-instagram fa-2x mx-2" style={{ color: "#03989E" }} />
						@vendegram
					</div>
					<div className="row justify-content-center">
						<i className="fab fa-facebook fa-2x mx-2" style={{ color: "#03989E" }} />
						/vendegram
					</div>
					<div className="row justify-content-center">
						<i className="fab fa-twitter fa-2x mx-2" style={{ color: "#03989E" }} />
						@vendegram
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<p className="">{`Copyright 2020 Todos los derechos Reservados`}</p>
			</div>
		</div>
	</footer>
);
