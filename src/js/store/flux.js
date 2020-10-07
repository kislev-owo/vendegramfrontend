var baseURL = "https://labvendegram.herokuapp.com";
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
				{
					id: "1",
					titulo: "Tomates",
					foto: "URL",
					descripcion: "tomates rojos y maduros. Todo fresco",
					precio: "1$ x kg",
					cantidad: "40 kgs",
					etiqueta_uno: "Alimentos",
					etiqueta_dos: "Bebidas",
					etiqueta_tres: "Fast-Food"
				},
				{
					id: "2",
					titulo: "Bicicleta montañera",
					foto: "URL",
					descripcion: "Bicicleta montañera en oferta. Marca Murray. Rin 26",
					precio: "50$",
					cantidad: "1",
					etiqueta_uno: "Otros",
					etiqueta_dos: "Vehiculos",
					etiqueta_tres: "Deportes",
					etiqueta_general: "Servicios"
				},
				{
					id: "3",
					titulo: "Servicio reparación TV",
					foto: "URL",
					descripcion: "Arreglamos todo tipo de Televisores",
					precio: "5$ por visita",
					cantidad: "10",
					etiqueta_uno: "Servicios",
					etiqueta_dos: "Tecnologia",
					etiqueta_tres: "Computadoras",
					etiqueta_general: "Servicios"
				},
				{
					id: "4",
					titulo: "Resma de Papel Bond base 20",
					foto: "URL",
					descripcion: "Materiales para oficina",
					precio: "3$",
					cantidad: "20",
					etiqueta_uno: "Otros",
					etiqueta_dos: "Papeleria",
					etiqueta_tres: "Papel",
					etiqueta_general: "Servicios"
				}
			],
			tienda: [
				{
					id: "1",
					nombre_tienda: "Bordaclick",
					foto_tienda:
						"data:image/png;base64,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",
					visibilidad: false,
					zona: ["Las Mercedes", "La Trinidad", "Los Samanes"],
					productos: [
						{
							id: "7",
							titulo: "Parches de superheroes",
							foto: "URL",
							descripcion: "Parches de 12cm x16cm de tus superheroes favoritos",
							precio: "3$",
							cantidad: "20",
							etiqueta_uno: "Parches",
							etiqueta_dos: "Ropa",
							etiqueta_tres: "Textil",
							etiqueta_general: "Servicios"
						},
						{
							id: "8",
							titulo: "Servicio de bordado de nombres",
							foto: "URL",
							descripcion: "Ofrecemos servicio de bordados tamaño 10cm x 10cm",
							precio: "5$ c/u",
							cantidad: "10",
							etiqueta_uno: "Ropa",
							etiqueta_dos: "Textil",
							etiqueta_tres: "Otros",
							etiqueta_general: "Servicios"
						},
						{
							id: "9",
							titulo: "Colores Prismacolor",
							foto: "URL",
							descripcion: "Caja de colores surtidos. 24 unidades",
							precio: "5$ c/u",
							cantidad: "10",
							etiqueta_uno: "Escolar",
							etiqueta_dos: "Papelería",
							etiqueta_tres: "Otros",
							etiqueta_general: "Servicios"
						}
					]
				},
				{
					id: "1",
					nombre_tienda: "PersonitasShop",
					foto_tienda:
						"data:image/png;base64,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",
					visibilidad: false,
					zona: ["Las Mercedes", "La Trinidad", "Los Samanes"],
					productos: [
						{
							id: "4",
							titulo: "Resma de Papel Bond base 20",
							foto:
								"data:image/jpeg;base64,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",
							descripcion: "Materiales para oficina",
							precio: "3$",
							cantidad: "20",
							etiqueta_uno: "Otros",
							etiqueta_dos: "Papeleria",
							etiqueta_tres: "Papel",
							etiqueta_general: "Servicios"
						},
						{
							id: "3",
							titulo: "Cuadernos Caribe",
							foto: "https://www.cuadernoscaribe.com/image/fundacion/montaje-1.png",
							descripcion: "Cuaderno de una línea tamaño carta, 100 hojas",
							precio: "5$ c/u",
							cantidad: "10",
							etiqueta_uno: "Escolar",
							etiqueta_dos: "Papelería",
							etiqueta_tres: "Otros",
							etiqueta_general: "Servicios"
						},
						{
							id: "5",
							titulo: "Colores Prismacolor",
							foto:
								"https://http2.mlstatic.com/colores-prismacolor-36-original-caja-de-lujo-nuevos-D_NQ_NP_669724-MLV32053902113_092019-O.webp",
							descripcion: "Caja de colores surtidos. 24 unidades",
							precio: "5$ c/u",
							cantidad: "10",
							etiqueta_uno: "Escolar",
							etiqueta_dos: "Papelería",
							etiqueta_tres: "Otros",
							etiqueta_general: "Servicios"
						},
						{
							id: "6",
							titulo: "Secador de cabello",
							foto: "https://venegangas.com/138-thickbox_default/secador-de-cabello.jpg",
							descripcion: "Secador de cabello de tres velocidades y dos temperaturas",
							precio: "40$ c/u",
							cantidad: "10",
							etiqueta_uno: "Peluqueria",
							etiqueta_dos: "Estilismo",
							etiqueta_tres: "Cabello",
							etiqueta_general: "Servicios"
						}
					]
				}
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

				console.log(productoABuscar);
				console.log(etiquetaGeneralABuscar);
				console.log(etiquetaABuscar);
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
			crearUsuario: async () => {
				const store = getStore();
				var dato = {
					nombre: store.datos_registro.nombre,
					apellido: store.datos_registro.apellido,
					clave: store.datos_registro.clave,
					telefono: store.datos_registro.telefono,
					fecha_nacimiento: store.datos_registro.fecha_nacimiento,
					correo: store.datos_registro.correo,
					suscripcion: null,
					foto_perfil: "hola",
					administrador: false,
					nombre_usuario: store.datos_registro.nombre_usuario
				};
				console.log(dato);
				try {
					const response = await fetch(`${baseURL}/usuario`, {
						method: "POST",
						body: JSON.stringify(dato),
						headers: {
							"Content-Type": "application/json"
						}
					});

					if (response.ok) {
						getTask();
						setTask("");
					} else {
						console.log(`Error al crear el usuario. ${response.status} ${response.statusText}`);
					}
				} catch (error) {
					console.log(`explote`);
				}

				// try {
				// 	const response = await fetch(`${baseURL}/usuario`, {
				// 		method: "POST",
				// 		body: JSON.stringify({
				// 			telefono: store.datos_registro.telefono,
				// 			clave: store.datos_registro.clave,
				// 			nombre: store.datos_registro.nombre,
				// 			apellido: store.datos_registro.apellido,
				// 			nombre_usuario: store.datos_registro.nombre_usuario,
				// 			fecha_nacimiento: store.datos_registro.fecha_nacimiento,
				// 			administrador: false,
				// 			foto_perfil: "hola",
				// 			suscripcion: false
				// 		}),
				// 		headers: {
				// 			"Content-Type": "application/json"
				// 		}
				// 	});
				// 	if (respopnse.ok) {
				// 		console.log("Pude crear el usuario correctamente");
				// 		// const store = getStore();
				// 		// setStore({
				// 		// 	datos_registro: {
				// 		// 		nombre: "",
				// 		// 		apellido: "",
				// 		// 		correo: "",
				// 		// 		foto_perfil: "",
				// 		// 		telefono: "",
				// 		// 		nombre_usuario: "",
				// 		// 		clave: "",
				// 		// 		fecha_nacimiento: "",
				// 		// 		codigo: "",
				// 		// 		nombre_tienda: "",
				// 		// 		suscripcion: null,
				// 		// 		admin: false
				// 		// 	}
				// 		// });
				// 	} else {
				// 		console.log(`Respuesta del servidor: ${response.status} , ${response.statusText}`);
				// 	}
				// } catch (error) {
				// 	console.log("No pude conectarme con el servidor al intentar crear el usuario");
				// }
			},
			datosRegistro: datos => {
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
