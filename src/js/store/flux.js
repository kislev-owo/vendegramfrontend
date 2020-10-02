const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			etiquetas: ["Alimentos", "Bebidas", "Fast-Food", "Servicios", "Otros"],
			zonas: ["Altamira", "Las Mercedes", "Los Palos Grandes", "Baruta"],
			productos: [
				{
					id: "1",
					nombre: "Tomates",
					imagen: "URL",
					descripcion: "tomates rojos y maduros. Todo fresco",
					precio: "1$ x kg",
					cantidad: "40 kgs",
					etiqueta1: "Alimentos",
					etiqueta2: "Bebidas",
					etiqueta3: "Fast-Food"
				},
				{
					id: "2",
					nombre: "Bicicleta montañera",
					imagen: "URL",
					descripcion: "Bicicleta montañera en oferta. Marca Murray. Rin 26",
					precio: "50$",
					cantidad: "1",
					etiqueta1: "Otros",
					etiqueta2: "Vehiculos",
					etiqueta3: "Deportes"
				},
				{
					id: "3",
					nombre: "Servicio reparación TV",
					imagen: "URL",
					descripcion: "Arreglamos todo tipo de Televisores",
					precio: "5$ por visita",
					cantidad: "10",
					etiqueta1: "Servicios",
					etiqueta2: "Tecnologia",
					etiqueta3: "Computadoras"
				},
				{
					id: "4",
					nombre: "Resma de Papel Bond base 20",
					imagen: "URL",
					descripcion: "Materiales para oficina",
					precio: "3$",
					cantidad: "20",
					etiqueta1: "Otros",
					etiqueta2: "Papeleria",
					etiqueta3: "Papel"
				}
			],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			buscarProductos: productoABuscar => {
				const store = getStore();
				let filteredList = store.productos.filter(
					producto => producto.nombre.toLowerCase().search(productoABuscar) != -1
				);
				setStore({
					resultadosBusqueda: filteredList
				});
				console.log(filteredList);
			},

			buscarEtiquetas: etiquetaABuscar => {
				const store = getStore();
				let filteredTagList = store.productos.filter(
					producto => producto.etiqueta1.search(etiquetaABuscar) != -1
				);
				setStore({
					resultadosBusqueda: filteredTagList
				});
				console.log(filteredTagList);
			},

			buscarZonas: zona => {
				const store = getStore();
				let filteredZoneList = store.productos.filter(producto => producto.zona.search(zona) != -1);
				setStore({
					resultadosBusqueda: filteredZoneList
				});
				console.log(filteredZoneList);
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

//  or producto.etiqueta2.search(etiqueta) or producto.etiqueta3.search(etiqueta))
