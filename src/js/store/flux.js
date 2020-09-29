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
					etiquetas: "Alimentos"
				},
				{
					id: "2",
					nombre: "Bicicleta montañera",
					imagen: "URL",
					descripcion: "Bicicleta montañera en oferta. Marca Murray. Rin 26",
					precio: "50$",
					cantidad: "1",
					etiquetas: "Otros"
				},
				{
					id: "3",
					nombre: "Servicio reparación TV",
					imagen: "URL",
					descripcion: "Arreglamos todo tipo de Televisores",
					precio: "5$ por visita",
					cantidad: "10",
					etiquetas: "Servicios"
				},
				{
					id: "4",
					nombre: "Resma de Papel Bond base 20",
					imagen: "URL",
					descripcion: "Materiales para oficina",
					precio: "3$",
					cantidad: "20",
					etiquetas: "Otros"
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

			buscarEtiquetas: etiqueta => {
				const store = getStore();
				let filteredTagList = store.productos.filter(producto => producto.etiquetas.search(etiqueta) != -1);
				setStore({
					resultadosBusqueda: filteredTagList
				});
				console.log(filteredTagList);
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
