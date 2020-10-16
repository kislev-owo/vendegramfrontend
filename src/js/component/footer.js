import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<>
		<footer className="footer mt-auto py-3">
			<div className="container-fluid">
				<div className="row d-flex justify-content-end m-3 " style={{ background: "#ffffff" }}>
					{/* <button
						className="btn btn-lg"
						href="https://t.me/VendegramBot"
						target="_blank"
						rel="noopener noreferrer">
						Ve a Telegram
						<i className="fab fa-2x p-2 fa-telegram" style={{ color: "#03989E" }} />
					</button> */}
					<div className="row d-flex justify-content-end m-3 ">
						<a
							href="https://t.me/VendegramBot"
							className="btn btn-lg btn-info align-center"
							style={{ background: "#03989E" }}>
							Ve a nuestro Telegram
							<a href="#" className="badge">
								<i className="fa fa-paper-plane" aria-hidden="true" style={{ color: "#ffffff" }} />
							</a>
						</a>
					</div>
				</div>

				<div className="row " style={{ background: "#C4C4C4" }}>
					<div className="col-4 text-center">
						<div className="row justify-content-center">{"Elaborado por:"}</div>
						<div className="row justify-content-center">{"Kislev"}</div>
						<div className="row justify-content-center">{"Albany"}</div>
						<div className="row justify-content-center">{"Oscar"}</div>
						<div className="row justify-content-center">{"Francisco"}</div>
					</div>

					<div className="col-4 text-center">
						{/* <div className="row justify-content-center">
						<button
							type="button"
							className="btn btn-primary rounded-lg"
							style={{ background: "#03989E", border: "none" }}>
							<i className="fas fa-question-circle mx-2" style={{ background: "000000" }} />
							{`Preguntas Frecuentes`}
						</button>
					</div> */}
						<div className="row justify-content-center my-2">
							<i className="fas fa-phone-alt mx-2" style={{ color: "#03989E" }} />
							0212-2575258
						</div>
						<div className="row justify-content-center my-2">
							<i className="fas fa-envelope mx-2" style={{ color: "#03989E" }} />
							vendegram@gmail.com
						</div>
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
				<div className="row justify-content-center" style={{ background: "#C4C4C4" }}>
					<p className="">{`Copyright 2020 Todos los derechos Reservados`}</p>
				</div>
			</div>
		</footer>
	</>
);
