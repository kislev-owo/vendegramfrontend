var baseURL = "https://labvendegram.herokuapp.com";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			etiquetas: ["Alimentos", "Bebidas", "Fast-Food", "Servicios", "Otros"],
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
			usuarios: [],
			tienda: [],
			tiendas: [
				{
					id: "2",
					nombre_tienda: "Bordaclick",
					foto_tienda: "https://via.placeholder.com/150",
					visibilidad: false,
					telefono_tienda: "04122587430",
					correo_tienda: "pedidos@bordaclick.com",
					facebook_tienda: "/Bordaclick",
					instagram_tienda: "@bordaclick",
					twitter_tienda: "@bordaclick",
					zona_general: "Las Mercedes",
					zona_uno: "La Trinidad",
					zona_dos: "Santa Fe",
					zona_tres: "Los Samanes",
					nombre_usuario: "Albany",
					productos: [1, 2, 3, 4]
					// productos: [
					// 	{
					// 		id: "7",
					// 		titulo: "Parches de superheroes",
					// 		foto: "https://via.placeholder.com/150",
					// 		descripcion: "Parches de 12cm x16cm de tus superheroes favoritos",
					// 		precio: "3$",
					// 		cantidad: "20",
					// 		etiqueta_uno: "Parches",
					// 		etiqueta_dos: "Ropa",
					// 		etiqueta_tres: "Textil",
					// 		etiqueta_general: "Servicios"
					// 	},
					// 	{
					// 		id: "8",
					// 		titulo: "Servicio de bordado de nombres",
					// 		foto: "https://via.placeholder.com/150",
					// 		descripcion: "Ofrecemos servicio de bordados tamaño 10cm x 10cm",
					// 		precio: "5$ c/u",
					// 		cantidad: "10",
					// 		etiqueta_uno: "Ropa",
					// 		etiqueta_dos: "Textil",
					// 		etiqueta_tres: "Otros",
					// 		etiqueta_general: "Servicios"
					// 	},
					// 	{
					// 		id: "9",
					// 		titulo: "Colores Prismacolor",
					// 		foto: "https://via.placeholder.com/150",
					// 		descripcion: "Caja de colores surtidos. 24 unidades",
					// 		precio: "5$ c/u",
					// 		cantidad: "10",
					// 		etiqueta_uno: "Escolar",
					// 		etiqueta_dos: "Papelería",
					// 		etiqueta_tres: "Otros",
					// 		etiqueta_general: "Servicios"
					// 	}
					// ]
				},
				{
					id: "1",
					nombre_tienda: "PersonitasShop",
					foto_tienda: "https://via.placeholder.com/150",
					visibilidad: false,
					telefono_tienda: "02122587430",
					correo_tienda: "pedidos@personitas.com",
					facebook_tienda: "/personitas_shop",
					instagram_tienda: "@personitas",
					twitter_tienda: "@personit4s",
					zona_general: "Macaracuay",
					zona_uno: "La Urbina",
					zona_dos: "Palo Verde",
					zona_tres: "La California",
					nombre_usuario: "Albany",
					nombre_usuario: "Alexandra",
					productos: [4, 5, 6]
					// productos: [
					// 	{
					// 		id: "4",
					// 		titulo: "Resma de Papel Bond base 20",
					// 		foto: "https://via.placeholder.com/150",
					// 		descripcion: "Materiales para oficina",
					// 		precio: "3$",
					// 		cantidad: "20",
					// 		etiqueta_uno: "Otros",
					// 		etiqueta_dos: "Papeleria",
					// 		etiqueta_tres: "Papel",
					// 		etiqueta_general: "Servicios"
					// 	},
					// 	{
					// 		id: "3",
					// 		titulo: "Cuadernos Caribe",
					// 		foto: "https://www.cuadernoscaribe.com/image/fundacion/montaje-1.png",
					// 		descripcion: "Cuaderno de una línea tamaño carta, 100 hojas",
					// 		precio: "5$ c/u",
					// 		cantidad: "10",
					// 		etiqueta_uno: "Escolar",
					// 		etiqueta_dos: "Papelería",
					// 		etiqueta_tres: "Otros",
					// 		etiqueta_general: "Servicios"
					// 	},
					// 	{
					// 		id: "5",
					// 		titulo: "Colores Prismacolor",
					// 		foto:
					// 			"https://http2.mlstatic.com/colores-prismacolor-36-original-caja-de-lujo-nuevos-D_NQ_NP_669724-MLV32053902113_092019-O.webp",
					// 		descripcion: "Caja de colores surtidos. 24 unidades",
					// 		precio: "5$ c/u",
					// 		cantidad: "10",
					// 		etiqueta_uno: "Escolar",
					// 		etiqueta_dos: "Papelería",
					// 		etiqueta_tres: "Otros",
					// 		etiqueta_general: "Servicios"
					// 	},
					// 	{
					// 		id: "6",
					// 		titulo: "Secador de cabello",
					// 		foto: "https://venegangas.com/138-thickbox_default/secador-de-cabello.jpg",
					// 		descripcion: "Secador de cabello de tres velocidades y dos temperaturas",
					// 		precio: "40$ c/u",
					// 		cantidad: "10",
					// 		etiqueta_uno: "Peluqueria",
					// 		etiqueta_dos: "Estilismo",
					// 		etiqueta_tres: "Cabello",
					// 		etiqueta_general: "Servicios"
					// 	}
					// ]
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
			datos_tienda: {
				correo_tienda: "",
				facebook_tienda: "",
				foto_tienda: "",
				instagram_tienda: "",
				nombre_tienda: "",
				telefono_tienda: "",
				twitter_tienda: "",
				zona_dos: "",
				zona_general: "",
				zona_tres: "",
				zona_uno: ""
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
			buscarProductos: productoABuscar => {
				const store = getStore();
				let filteredList = store.productos.filter(
					producto => producto.titulo.toLowerCase().search(productoABuscar) != -1
				);
				setStore({
					resultadosBusqueda: filteredList
				});
				console.log(filteredList);
			},

			// Búsqueda por Etiqueta
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
						console.log("Pude crear el usuario correctamente");
						setStore({
							datos_registro: {
								nombre: "",
								apellido: "",
								correo: "",
								foto_perfil: "",
								telefono: "",
								nombre_usuario: "",
								clave: "",
								fecha_nacimiento: "",
								codigo: "",
								nombre_tienda: "",
								suscripcion: null,
								admin: false
							}
						});
					} else {
						console.log(`Error al crear el usuario. ${response.status} ${response.statusText}`);
					}
				} catch (error) {
					console.log(`explote`);
				}
			},
			datosRegistroUsuario: datos => {
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
			datosRegistroTienda: tienda => {
				console.log("Entre en la funcion");
				const store = getStore();
				setStore({
					correo_tienda: tienda.correo_tienda,
					facebook_tienda: tienda.facebook_tienda,
					foto_tienda: "",
					instagram_tienda: tienda.instagram_tienda,
					nombre_tienda: tienda.nombre_tienda,
					telefono_tienda: tienda.codigo + tienda.numero,
					twitter_tienda: tienda.twitter_tienda,
					zona_dos: "",
					zona_general: "",
					zona_tres: "",
					zona_uno: ""
				});
			},
			getTiendas: async () => {
				try {
					const response = await fetch(`${baseUrl}/tienda`);

					if (response.ok) {
						let tiendasApi = await response.json();
						setStore({
							tiendas: tiendasApi
						});
						console.log("Logré traer las tiendas con exito");
					} else {
						console.log(
							`Hubo un problema trayendo las tiendas respuesta: ${response.status} ${response.statusText}`
						);
					}
				} catch (error) {
					console.log(`No me pude comunicar con el servidor al buscar las tiendas : ${error}`);
				}
			},
			getUsuarios: async () => {
				try {
					const response = await fetch(`${baseUrl}/usuario`);

					if (response.ok) {
						let usuariosApi = await response.json();
						setStore({
							usuarios: usuariosApi
						});
						console.log("Logré traer los usuarios con exito");
					} else {
						console.log(
							`Hubo un problema trayendo los usuarios: ${response.status} ${response.statusText}`
						);
					}
				} catch (error) {
					console.log(`No me pude comunicar con el servidor al buscar los usuarios : ${error}`);
				}
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
