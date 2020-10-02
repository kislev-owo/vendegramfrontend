import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Productos } from "./views/Productos";
import { Etiquetas } from "./views/Etiquetas";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Condiciones } from "./component/Condiciones";
import { Registrate } from "./views/registrate";


import { Nosotros } from "./views/Nosotros";
import { Contactanos } from "./views/Contactanos";
import { RegistrateVendedor } from "./views/RegistrateVendedor";
import { ResumenInformacion } from "./views/ResumenInformacion";
import { PlanSubscripcion } from "./views/PlanSubscripcion";
import { ConfirmarPago } from "./views/ConfirmarPago";
import { FinalizarRegistroVendedor } from "./views/FinalizarRegistroVendedor";
import { ComoFunciona } from "./views/ComoFunciona";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/Productos">
							<Productos />
						</Route>

						<Route exact path="/Etiquetas">
							<Etiquetas />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/ComoFunciona">
							<ComoFunciona />
						</Route>
						<Route exact path="/registrate">
							<Registrate />
						</Route>
						<Route exact path="/nosotros">
							<Nosotros />
						</Route>
						<Route exact path="/contactanos">
							<Contactanos />
						</Route>
						<Route exact path="/reg-vendedor">
							<RegistrateVendedor />
						</Route>

						<Route exact path="/plan">
							<PlanSubscripcion />
						</Route>
						<Route exact path="/confirmar-pago">
							<ConfirmarPago />
						</Route>
						<Route exact path="/resumen-informacion">
							<ResumenInformacion />
						</Route>
						<Route exact path="/finalizar-registro-vendedor">
							<FinalizarRegistroVendedor />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/condiciones">
							<Condiciones />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
