const BaseAPIurl = "https://labvendegram.herokuapp.com/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			etiquetas: [
				"alimentos",
				"Bebidas",
				"Cereales",
				"Decoraciones",
				"Detergentes",
				"Enlatados",
				"Jabones",
				"Mantenimientos",
				"Maquillajes",
				"Medicamentos",
				"Peluquería",
				"Peluquería_veterinaria",
				"Plomería",
				"Reparaciones",
				"Ropa",
				"Salsas",
				"servicios"
			],
			zonas: ["Altamira", "Las Mercedes", "Los Palos Grandes", "Baruta"],
			productos: [
				// {
				// 	id: "1",
				// 	titulo: "Tomates",
				// 	foto: "foto",
				// 	descripcion: "tomates rojos y maduros. Todo fresco",
				// 	precio: "1$ x kg",
				// 	cantidad: "40 kgs",
				// 	etiqueta1: "Alimentos",
				// 	etiqueta2: "Bebidas",
				// 	etiqueta3: "Fast-Food"
				// },
				// {
				// 	id: "2",
				// 	titulo: "Bicicleta montañera",
				// 	foto: "foto",
				// 	descripcion: "Bicicleta montañera en oferta. Marca Murray. Rin 26",
				// 	precio: "50$",
				// 	cantidad: "1",
				// 	etiqueta1: "Otros",
				// 	etiqueta2: "Vehiculos",
				// 	etiqueta3: "Deportes"
				// },
				// {
				// 	id: "3",
				// 	titulo: "Servicio reparación TV",
				// 	foto: "foto",
				// 	descripcion: "Arreglamos todo tipo de Televisores",
				// 	precio: "5$ por visita",
				// 	cantidad: "10",
				// 	etiqueta1: "Servicios",
				// 	etiqueta2: "Tecnologia",
				// 	etiqueta3: "Computadoras"
				// },
				// {
				// 	id: "4",
				// 	titulo: "Resma de Papel Bond base 20",
				// 	foto: "foto",
				// 	descripcion: "Materiales para oficina",
				// 	precio: "3$",
				// 	cantidad: "20",
				// 	etiqueta1: "Otros",
				// 	etiqueta2: "Papeleria",
				// 	etiqueta3: "Papel"
				// }
			],
			datos_registro: {
				telefono: "",
				clave: "",
				nombre: "",
				apellido: "",
				nombre_tienda: "",
				nombre_usuario: "",
				fecha_nacimiento: "",
				administrador: false,
				foto_perfil: "",
				subscripcion: false
			},
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
		// Búsqueda por Producto o general por defecto
		actions: {
			buscarProductos: (productoABuscar, etiquetaABuscar, zonaABuscar) => {
				const store = getStore();
				let filteredList = store.productos.filter(
					producto => producto.titulo.toLowerCase().search(productoABuscar) != -1
				);
				setStore({
					resultadosBusqueda: filteredList
				});
				console.log(filteredList);
			},

			// ##### Fetch para Cargar Productos desde la Api ##### 1
			fetchCargarProductos: async (productoABuscar, etiquetaGeneralABuscar, etiquetaABuscar, zonaABuscar) => {
				let productos = [];
				console.log(etiquetaABuscar);
				console.log(etiquetaGeneralABuscar);

				let url = `https://labvendegram.herokuapp.com/producto?`;
				if (productoABuscar == "") {
					url = url;
				} else {
					url += `titulo=${productoABuscar}`;
					console.log(url);
				}
				if (etiquetaGeneralABuscar != "") {
					url += `&etiqueta_general=${etiquetaGeneralABuscar}`;
				}

				if (etiquetaABuscar != "") {
					url += `&etiqueta=${etiquetaABuscar}`;
				}
				if (zonaABuscar != "") {
					url += `&zona=${zonaABuscar}`;
				}
				let response = await fetch(url);
				if (response.ok) {
					let productos = await response.json();
					setStore({
						productos: productos
					});
					console.log(productos);
					return true;
				} else {
					console.log(`get response failure: ${response.status}`);
					setStore({
						productos: []
					});
					return false;
				}
			},

			// Función para Búsqueda por Etiqueta
			buscarEtiquetas: etiquetaABuscar => {
				const store = getStore();
				let filteredTagList = store.productos.filter(
					producto => producto.etiqueta_general.search(etiquetaABuscar) != -1
				);
				setStore({
					resultadosEtiqueta: filteredTagList
				});
				console.log("Esta es busqueda por la etiqueta " + etiquetaABuscar + " del flux");
				console.log(filteredTagList);
			},

			// ##### Fetch para Cargar Etiquetas desde la Api ##### 2
			fetchCargarEtiquetas: async () => {
				let etiquetas = [];
				let url = `https://labvendegram.herokuapp.com/etiqueta`;

				let response = await fetch(url);
				if (response.ok) {
					let etiquetas = await response.json();
					setStore({
						etiquetas: etiquetas
					});
					console.log(etiquetas);
					return true;
				} else {
					console.log(`get response failure: ${response.status}`);
					setStore({
						etiquetas: []
					});
					return false;
				}
			},

			// Búsqueda por Zona
			buscarXZonas: zonaABuscar => {
				const store = getStore();
				let filteredZoneList = store.productos.filter(producto => producto.zona.search(zonaABuscar) != -1);
				setStore({
					resultadosBusqueda: filteredZoneList
				});
				console.log(filteredZoneList);
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			datosRegistroComprador: datos => {
				const store = getStore();
				setStore({
					datos_registro: {
						nombre: datos.nombre,
						apellido: datos.apellido,
						correo: datos.correo,
						telefono: datos.codigo + datos.numero,
						nombre_usuario: datos.nombre_usuario,
						clave: datos.clave,
						fecha_nacimiento: datos.fecha_nacimiento
					}
				});

				console.log("ENTRE!");
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
// ?titulo=${titulo}
