import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working. Check!!
		</a>
	</div>
);


// Codigo de la pagina Productos

<div className="d-flex justify-content-between align-items-center">
				<div>
					<h2 className="text-info ml-4 margen">Productos encontrados</h2>
					<input
						className="w-25 ml-4"
						type="text"
						placeholder="Search"
						onChange={e => setBuscarProducto(e.target.value)}
					/>
				</div>
				<Link to="/">
					<button className="btn btn-primary mr-4" style={{ background: "#03989E" }}>
						Home
					</button>
				</Link>
			</div>

// ####### Codigo de Buscar Etiqueta que renderiza input group de Etiquetas  ##########

export const BuscarEtiqueta = props => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [etiquetaABuscar, setEtiquetaABuscar] = useState("");

	console.log(etiquetaABuscar);

	return (
		<>
			<div className="input-group">
				<select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
					<option selected>Elige una etiqueta...</option>
					{store.etiquetas.map((etiqueta, index) => {
						return (
							<option
								key={index}
								value={etiquetaABuscar}
								onChange={e => setEtiquetaABuscar(e.target.value)}>
								{etiqueta}
							</option>
						);
					})}
				</select>
				<div className="input-group-append">
					<button
						className="btn btn-outline-light"
						type="button"
						style={{ background: "#03989E" }}
						onClick={() => {
							actions.buscarEtiquetas(etiquetaABuscar);
							console.log(etiquetaABuscar);
							history.push("../Etiquetas");
						}}>
						Etiquetas
					</button>
				</div>
			</div>
		</>
	);
};

BuscarEtiqueta.propTypes = {};

// ########### Funcion para la búsqueda simultanea por Producto, Etiqueta y Zona ###############
	const Busqueda = () => {
		if (zonaABuscar != "") {
			if (etiquetaABuscar != "") {
				if (productoABuscar != "") {
					/* caso(5) 1,1,1 buscar por zona + etiqueta + producto */
					actions.buscarZonaEtiquetaProducto(zonaABuscar, etiquetaABuscar, productoABuscar);
				}
				/* caso(6) 1,1,0 buscar por zona + etiqueta */
				actions.buscarZonaEtiqueta(zonaABuscar, etiquetaABuscar);
			} else {
				if (productoABuscar != "") {
					/* caso(8) 1,0,1 buscar por zona + producto */
					actions.buscarZonaProducto(zonaABuscar, productoABuscar);
				}
				/* caso(7) 1,0,0 buscar por zona */
				actions.buscarZona(zonaABuscar);
			}
		} else {
			if (etiquetaABuscar != "") {
				actions.buscarEtiquetas(etiquetaABuscar);
			}
			if (productoABuscar != "") {
				/* caso(3) 0,1,1 buscar por etiqueta + producto */
				actions.buscarEtiquetaProducto(etiquetaABuscar, productoABuscar);
			}
			/* caso(4) 0,1,0 buscar por etiqueta */

			console.log("búsqueda por etiqueta exitosa");
		}
		/* caso(1-2) 0,0,0 - 0,0,1 buscar todos - producto */
		actions.buscarProductos(productoABuscar);
		console.log("búsqueda por producto exitosa");
	};

// ######### Codigo onClick de Buscar por Etiquetas en componente Buscar ########
//    onClick={() => {
							actions.buscarEtiquetas(etiquetaABuscar);
							console.log(etiquetaABuscar);
							history.push("../Etiquetas");
//						}}

          