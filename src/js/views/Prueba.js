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

// Codigo de Home que renderiza Buscar

           