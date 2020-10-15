//////////////////   URL DE HEROKU    /////

var baseURL = "https://labvendegram.herokuapp.com";

//var baseURL = "https://5000-f3338a26-702f-4add-9cf4-5cb8f9c5e44d.ws-us02.gitpod.io";

///////////////// URL DE OSCAR (LOCAL) /////////
// var baseURL = "https://5000-f3338a26-702f-4add-9cf4-5cb8f9c5e44d.ws-us02.gitpod.io/";

//var baseURL = "http://localhost:5000";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			//usuarioLogin: [2],
			usuarioLogin: {
				usuario_id: "",
				nombre_usuario: ""
			},

			//nombreUsuario: [],

			etiquetas: [
				"Alimentos",
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
				"Productos",
				"Reparaciones",
				"Ropa",
				"Salsas",
				"Servicios"
			],
			zonas: [
				"Distrito_capital",
				"Miranda",
				"altagracia",
				"antímano",
				"candelaria",
				"caricuao",
				"catedral",
				"catia",
				"caucaguita",
				"chacao",
				"el_cafetal",
				"el_junquito",
				"el_paraíso",
				"el_recreo",
				"el_valle",
				"fila_de_mariches",
				"la_dolorita",
				"la_pastora",
				"la_vega",
				"las_minas",
				"leoncio_martínez",
				"macarao",
				"nuestra_señora_del_rosario",
				"petare",
				"san_agustín",
				"san_bernardino",
				"san_josé",
				"san_juan",
				"san_pedro",
				"santa_rosalía",
				"santa_rosalía_de_palermo",
				"santa_teresa",
				"ventitrés_de_enero"
			],
			zonas_delivery: [
				"Distrito Capital",
				"Miranda",
				"Altagracia",
				"Antímano",
				"Candelaria",
				"Caricuao",
				"Catedral",
				"Catia",
				"Caucaguita",
				"Chacao",
				"El Cafetal",
				"El Junquito",
				"El Paraíso",
				"El Recreo",
				"El Valle",
				"Fila De Mariches",
				"La Dolorita",
				"La Pastora",
				"La Vega",
				"Las Minas",
				"Leoncio Martínez",
				"Macarao",
				"Nuestra Señora del Rosario",
				"Petare",
				"San Agustín",
				"San Bernardino",
				"San José",
				"San Juan",
				"San Pedro",
				"Santa Rosalía",
				"Santa Rosalía de Palermo",
				"Santa Teresa",
				"Ventitrés de Enero"
			],
			productos: [
				// {
				// 	id: "1",
				// 	titulo: "Tomates",
				// 	foto: "URL",
				// 	descripcion: "tomates rojos y maduros. Todo fresco",
				// 	precio: "1$ x kg",
				// 	cantidad: "40 kgs",
				// 	etiqueta_uno: "Alimentos",
				// 	etiqueta_dos: "Bebidas",
				// 	etiqueta_tres: "Fast-Food"
				// },
				// {
				// 	id: "2",
				// 	titulo: "Bicicleta montañera",
				// 	foto: "URL",
				// 	descripcion: "Bicicleta montañera en oferta. Marca Murray. Rin 26",
				// 	precio: "50$",
				// 	cantidad: "1",
				// 	etiqueta_uno: "Otros",
				// 	etiqueta_dos: "Vehiculos",
				// 	etiqueta_tres: "Deportes",
				// 	etiqueta_general: "Servicios"
				// },
				// {
				// 	id: "3",
				// 	titulo: "Servicio reparación TV",
				// 	foto: "URL",
				// 	descripcion: "Arreglamos todo tipo de Televisores",
				// 	precio: "5$ por visita",
				// 	cantidad: "10",
				// 	etiqueta_uno: "Servicios",
				// 	etiqueta_dos: "Tecnologia",
				// 	etiqueta_tres: "Computadoras",
				// 	etiqueta_general: "Servicios"
				// },
				// {
				// 	id: "4",
				// 	titulo: "Resma de Papel Bond base 20",
				// 	foto: "URL",
				// 	descripcion: "Materiales para oficina",
				// 	precio: "3$",
				// 	cantidad: "20",
				// 	etiqueta_uno: "Otros",
				// 	etiqueta_dos: "Papeleria",
				// 	etiqueta_tres: "Papel",
				// 	etiqueta_general: "Servicios"
				// }
			],
			// token_usuario: {
			// 	id: "2",
			// 	token: []
			// },
			usuarios: [],
			tienda: {
				productos: []
			},
			productos_tienda: [],

			tiendas: [
				// {
				// 	id: "2",
				// 	nombre_tienda: "Bordaclick",
				// 	foto_tienda: "https://via.placeholder.com/150",
				// 	visibilidad: false,
				// 	telefono_tienda: "04122587430",
				// 	correo_tienda: "pedidos@bordaclick.com",
				// 	facebook_tienda: "/Bordaclick",
				// 	instagram_tienda: "@bordaclick",
				// 	twitter_tienda: "@bordaclick",
				// 	zona_general: "Las Mercedes",
				// 	zona_uno: "La Trinidad",
				// 	zona_dos: "Santa Fe",
				// 	zona_tres: "Los Samanes",
				// 	usuario_id: "1",
				// 	usuario_nombre: "Albany",
				// 	productos: [1, 2, 3, 4]
				// },
				// {
				// 	id: "1",
				// 	nombre_tienda: "PersonitasShop",
				// 	foto_tienda: "https://via.placeholder.com/150",
				// 	visibilidad: false,
				// 	telefono_tienda: "02122587430",
				// 	correo_tienda: "pedidos@personitas.com",
				// 	facebook_tienda: "/personitas_shop",
				// 	instagram_tienda: "@personitas",
				// 	twitter_tienda: "@personit4s",
				// 	zona_general: "Macaracuay",
				// 	zona_uno: "La Urbina",
				// 	zona_dos: "Palo Verde",
				// 	zona_tres: "La California",
				// 	usuario_nombre: "Pedro",
				// 	usuario_id: "2",
				// 	productos: [4, 5]
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
		// ##### Búsqueda de Producto por Id - se busca en el store del arreglo productos ######
		actions: {
			buscarProductoId: productoId => {
				const store = getStore();
				let filteredList = store.productos.filter(producto => producto.id.search(productoId) != -1);
				setStore({
					resultadosBusqueda: filteredList
				});
				console.log(filteredList);
			},

			// ######### Fetch para hacer búsqueda y cargar Productos desde la Api ######### 1
			fetchCargarProductos: async (productoABuscar, etiquetaABuscar, zonaABuscar) => {
				let productos = [];
				console.log(productoABuscar);
				console.log(etiquetaABuscar);
				console.log(zonaABuscar);
				let url = `${baseURL}/producto?`;
				if (productoABuscar == "") {
					url = url;
				} else {
					url += `titulo=${productoABuscar.toLowerCase()}`;
					console.log(url);
				}
				if (etiquetaABuscar != "Seleccione una Categoría") {
					url += `&etiqueta=${etiquetaABuscar.toLowerCase()}`;
				} else {
					url = url;
				}
				if (zonaABuscar != "Seleccione una Zona") {
					url += `&zona=${zonaABuscar.toLowerCase()}`;
				} else {
					url = url;
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
			// ######## Funcion que Filtra las tiendas segun el id del usuario ########
			// ##### Si está funcionando  #####
			buscarTienda: usuario_id => {
				console.log("Entre en buscar tienda");
				const store = getStore();
				var arrPorId = store.tiendas.filter(obj => {
					if ("usuario_id" in obj && obj.usuario_id == usuario_id && !isNaN(obj.usuario_id)) {
						return true;
					} else {
						return false;
					}
				});
				console.log(`Aqui esta la tienda del usuario:`);
				console.log(`${arrPorId}`);
				setStore({
					tienda: arrPorId[0] || { productos: [] }
				});
				return arrPorId[0] ? arrPorId[0].productos : [];
			},
			getProductosTienda: async () => {
				const store = getStore();
				var producto_id = store.tienda.productos; //futuro lista de id o algo mas exlicativo :)
				var arreglo = [];
				console.log(producto_id);
				for (var i = 0; i < producto_id.length; i++) {
					console.log(producto_id[i]);
					try {
						const response = await fetch(`${baseURL}/producto/${producto_id[i]}`);
						if (response.ok) {
							let producto = await response.json();
							console.log("Pude traer el producto con exito");
							arreglo.push(producto);
						} else {
							console.log(`Error al traer el producto. ${response.status} ${response.statusText}`);
						}
					} catch (error) {
						console.log(`explote al traer el producto`);
					}
				}
				setStore({
					productos_tienda: arreglo
				});
			},

			// ######## Fetch para Cargar Productos x Etiquetas desde la Api ######## 2
			// ##### (se llama desde el Home a través del componente EtiquetasCard) #####
			fetchCargarProductoEtiquetas: async etiqueta => {
				console.log(etiqueta);
				let url = `${baseURL}/producto?`;

				if (etiqueta != "") {
					url += `&etiqueta=${etiqueta.toLowerCase()}`;
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

			// ######## Fetch para Cargar las Tiendas una vez desde la Api ######## 3
			// ##### (se llama desde el Home con el botón Ver Tiendas) ##### -- Listo el 09-10-20
			fetchCargarTiendas: async () => {
				//console.log(tienda);
				let url = `${baseURL}/tienda`;

				let response = await fetch(url);
				if (response.ok) {
					let tiendas = await response.json();
					setStore({
						tiendas: tiendas
					});
					console.log(tiendas);
					return true;
				} else {
					console.log(`get response failure: ${response.status}`);
				}
				setStore({
					tiendas: []
				});
				return false;
			},

			// ######## Fetch para Cargar Vista de Productos x Tienda desde la Api ######## 4
			// ##### (No está en uso todavía) #####
			fetchCargarVistaTienda: async tienda => {
				console.log(tienda);
				let url = `${baseURL}/producto?`;

				if (tienda != "") {
					url += `&tienda=${tienda}`;
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
			// ######## Fetch para Crear un Usuario ######## 4
			// ##### Si funciona  #####
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
						return true;
						// setStore({
						// 	datos_registro: {
						// 		nombre: "",
						// 		apellido: "",
						// 		correo: "",
						// 		foto_perfil: "",
						// 		telefono: "",
						// 		nombre_usuario: "",
						// 		clave: "",
						// 		fecha_nacimiento: "",
						// 		codigo: "",
						// 		nombre_tienda: "",
						// 		suscripcion: null,
						// 		admin: false
						// 	}
						// });
					} else {
						console.log(`Error al crear el usuario. ${response.status} ${response.statusText}`);
					}
				} catch (error) {
					console.log(`explote`);
				}
				return false;
			},

			/////////////  INIT- POST: REGISTRO USUARIO //////////////////////////////////////

			datosRegistroUsuario: async datos => {
				setStore({
					datos_registro: {
						nombre: datos.nombre,
						apellido: datos.apellido,
						correo: datos.correo,
						telefono: datos.codigo + datos.numero,
						nombre_usuario: datos.nombre_usuario,
						clave: datos.clave,
						fecha_nacimiento: datos.fecha_nacimiento,
						foto_perfil: "url",
						suscripcion: 1,
						administrador: false
					}
				});
			},

			/////////////  FINISH- POST:REGRISTRO  USUARIO //////////////////////////////////////

			/////////////  INIT- POST: INGRESAR //////////////////////////////////////
			ingresando: async datos => {
				console.log("entre en ingresando");
				let usuario = [];
				const store = getStore();
				let id;
				let nombre;
				let response = await fetch(baseURL + "/" + "ingresar", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						correo: datos.correo,
						clave: datos.clave
					})
				});
				if (response.ok) {
					usuario = await response.json();
					// token => token.json();
					// token => {
					localStorage.setItem("token", usuario.jwt);
					setStore({ usuario, token: usuario.jwt });
					//localStorage.setItem("usuarioLogin", usuario.id);
					id = usuario.id;
					nombre = usuario.nombre;
					setStore({ usuarioLogin: { usuario_id: id, usuario_nombre: nombre } });
					//localStorage.setItem("nombreUsuario", usuario.nombre_usuario);
					//setStore({ usuarioLogin, nombre_usuario: usuario.nombre_usuario });
					console.log(`Aqui esta el id del usuario que esta registrado: ${id}`);
					let id_productos = await getActions().buscarTienda(id);
					getActions().getProductosTienda(id_productos);
					return id;
					// };
				} else {
					return false;
				}
			},

			/////////////  FINISH- POST: INGRESAR //////////////////////////////////////

			/////////////  INIT- LOGOUT //////////////////////////////////////

			salir: () => {
				localStorage.removeItem("token");
				setStore({ token: null });
			},

			/////////////  FINISH- LOGOUT //////////////////////////////////////

			datosRegistroTienda: async tienda => {
				const store = getStore();
				let usuario = await getActions().crearUsuario();
				if (usuario) {
					const usuarioId = await getActions().ingresando({
						correo: store.datos_registro.correo,
						clave: store.datos_registro.clave
					});
					if (usuarioId != false) {
						tienda.usuario_id = usuarioId;
						tienda.telefono_tienda = tienda.codigo + tienda.numero;
						delete tienda.codigo;
						delete tienda.numero;
						const response = await fetch(`${baseURL}/tienda`, {
							method: "POST",
							body: JSON.stringify(tienda),
							headers: {
								"Content-Type": "application/json",
								Authorization: `Bearer ${store.token}`
							}
						});
					} else {
						alert("estoy fallando manao");
					}
				}
				// setStore({
				// 	correo_tienda: tienda.correo_tienda,
				// 	facebook_tienda: tienda.facebook_tienda,
				// 	foto_tienda: "",
				// 	instagram_tienda: tienda.instagram_tienda,
				// 	nombre_tienda: tienda.nombre_tienda,
				// 	telefono_tienda: tienda.codigo + tienda.numero,
				// 	twitter_tienda: tienda.twitter_tienda,
				// 	zona_dos: "",
				// 	zona_general: "",
				// 	zona_tres: "",
				// 	zona_uno: ""
				// });
			},
			// ######## Fetch para cargar todos los usuarios en el store ########
			// ##### (No está en uso todavía y creo que le faltan cosas) #####
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

			//revisar y borrar
			// signUp: async (vendor_name, email, password, phone) => {
			// 	let response = await fetch(baseURL + "/" + "usuario", {
			// 		method: "POST",
			// 		body: JSON.stringify({
			// 			vendor_name: vendor_name,
			// 			email: email,
			// 			password: password,
			// 			phone: phone
			// 		}),
			// 		headers: {
			// 			"Content-Type": "application/json"
			// 		}
			// 	});
			// 	if (response.ok) {
			// 		await getActions().login(email, password);
			// 		return true;
			// 	} else {
			// 		return false;
			// 	}
			// }
		}
	};
};

export default getState;
