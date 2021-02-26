/* 
Debemos realizar la carga de una compra de 5(cinco) 
productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
1/el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
2/el precio (validar entre 100 y 300),
3/la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
4/la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total

*/
function mostrar()
{
	let tipoDeProductoIngresado;
	let precioIngresado;
	let unidadesIngresadas;
	let marcaIngresada;
	let fabricanteIngresado;
	let unidadesDeJabon;
	let unidadesDeAlcohol;
	let unidadesDeBarbijo;
	let alcoholBarato;
	let unidadesAlcoholBarato;
	let fabricanteAlcoholBarato;
	let tipoConMasUnidades;
	let promedioDelTipoConMasUnidades;

	contadorDeBarbijo=0;
	contadorDeAlcohol=0;
	contadorDeJabon=0;
	unidadesDeJabon=0;
	unidadesDeAlcohol=0;
	unidadesDeBarbijo=0;

	for (contadorDeProductos = 0; contadorDeProductos < 5; contadorDeProductos++) 
	{
		//tipo del producto ingresado + validacion
		tipoDeProductoIngresado=prompt("Ingrese el tipo del producto #"+(contadorDeProductos+1)+" (jabón, barbijo o alcohol)");
		while(isNaN(tipoDeProductoIngresado)==false&&tipoDeProductoIngresado!="jabón"&&tipoDeProductoIngresado!="barbijo"&&tipoDeProductoIngresado!="alcohol")
		{
			tipoDeProductoIngresado=prompt("Error. Ingrese el tipo del producto #"+(contadorDeProductos+1)+" (jabón, barbijo o alcohol)");
		}
		//precio del producto ingresado + validacion
		precioIngresado=prompt("Ingrese el precio del producto #"+(contadorDeProductos+1));
		precioIngresado=parseInt(precioIngresado);
		while(isNaN(precioIngresado)||precioIngresado>300||precioIngresado<100)
		{
			precioIngresado=prompt("Error. Ingrese el precio del producto #"+(contadorDeProductos+1)+", entre 100 y 300.");
			precioIngresado=parseInt(precioIngresado);
		}
		//unidades del producto ingresado + validacion
		unidadesIngresadas=prompt("Ingrese la cantidad de unidades del producto #"+(contadorDeProductos+1));
		unidadesIngresadas=parseInt(unidadesIngresadas);
		while(isNaN(unidadesIngresadas)||unidadesIngresadas>1000||unidadesIngresadas<1) 
		{
			unidadesIngresadas=prompt("Error. Ingrese la cantidad de unidades del producto #"+(contadorDeProductos+1)+", hasta 1000.");
			unidadesIngresadas=parseInt(unidadesIngresadas);
		}
		//marca y fabricante del producto ingresado
		marcaIngresada=prompt("Ingrese la marca del producto #"+(contadorDeProductos+1));
		fabricanteIngresado=prompt("Ingrese el fabricante del producto #"+(contadorDeProductos+1));
		//switch para contar veces que se compra un producto y sumar cantidad, alcohol mas barato 
		switch (tipoDeProductoIngresado)
		{
			case "jabón":
			unidadesDeJabon+=unidadesIngresadas;
			contadorDeJabon++;
			break;
			case "alcohol":
			contadorDeAlcohol++;
			unidadesDeAlcohol+=unidadesIngresadas;
			if (contadorDeAlcohol==1||alcoholBarato>precioIngresado) 
			{
				alcoholBarato=precioIngresado;
				unidadesAlcoholBarato=unidadesIngresadas;
				fabricanteAlcoholBarato=fabricanteIngresado;
			}
			break;
			case "barbijo":
			contadorDeBarbijo++;
			unidadesDeBarbijo+=unidadesIngresadas;
			break;
		}
	} 

	//tipo de producto con mas unidades y promedio
	if (unidadesDeBarbijo>unidadesDeAlcohol&&unidadesDeBarbijo>unidadesDeJabon) 
	{
		promedioDelTipoConMasUnidades=unidadesDeBarbijo/contadorDeBarbijo;
		tipoConMasUnidades="barbijo";
	} else 
	{
		if (unidadesDeAlcohol>unidadesDeJabon) 
		{
			promedioDelTipoConMasUnidades=unidadesDeAlcohol/contadorDeAlcohol;
			tipoConMasUnidades="alcohol";
		} else 
		{
			promedioDelTipoConMasUnidades=unidadesDeJabon/contadorDeJabon;
			tipoConMasUnidades="jabón";
		}
	}
	//alerts, se informa al usuario
	alert("El más barato de los alcoholes es el fabricado por "+fabricanteAlcoholBarato+", del cual se compraron "+unidadesAlcoholBarato+" unidades.");
	alert("El tipo de producto que más unidades se compraron fue "+tipoConMasUnidades+", del cual se compraron en promedio "+promedioDelTipoConMasUnidades+" unidades por compra.");
	alert("Se compraron en total "+unidadesDeBarbijo+" barbijos.");
}
