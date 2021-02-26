/* Nicolas Montagut Parcial 2020 ejercicio 1
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,----
el precio (validar entre 100 y 300),----
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),----
la Marca y el fabricante.-----
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcoholes, la cantidad de unidades y el fabricante---
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total----
*/
function mostrar()
{
	let contadorProductos; 
	let tipoIngresado;
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

	contadorProductos=0;
	contadorDeBarbijo=0;
	contadorDeAlcohol=0;
	contadorDeJabon=0;
	unidadesDeJabon=0;
	unidadesDeAlcohol=0;
	unidadesDeBarbijo=0;

	for (contadorProductos = 0; contadorProductos < 5; contadorProductos++) 
	{
		//tipo del producto ingresado + validacion
		tipoIngresado=prompt("Ingrese el tipo del producto #"+contadorProductos+" (jabón, barbijo o alcohol)");
		while(tipoIngresado!="jabón"&&tipoIngresado!="barbijo"&&tipoIngresado!="alcohol")
		{
			tipoIngresado=prompt("Error. Ingrese el tipo del producto #"+contadorProductos+" (jabón, barbijo o alcohol)");
		}
		//precio del producto ingresado + validacion
		precioIngresado=prompt("Ingrese el precio del producto #"+contadorProductos);
		precioIngresado=parseInt(precioIngresado);
		while(isNaN(precioIngresado)||precioIngresado>300||precioIngresado<100)
		{
			precioIngresado=prompt("Error. Ingrese el precio del producto #"+contadorProductos+", entre 100 y 300.");
			precioIngresado=parseInt(precioIngresado);
		}
		//unidades del producto ingresado + validacion
		unidadesIngresadas=prompt("Ingrese la cantidad de unidades del producto #"+contadorProductos);
		unidadesIngresadas=parseInt(unidadesIngresadas);
		while(isNaN(unidadesIngresadas)||unidadesIngresadas>1000||unidadesIngresadas<1) 
		{
			unidadesIngresadas=prompt("Error. Ingrese la cantidad de unidades del producto #"+contadorProductos+", hasta 1000.");
			unidadesIngresadas=parseInt(unidadesIngresadas);
		}
		//marca y fabricante del producto ingresado
		marcaIngresada=prompt("Ingrese la marca del producto #"+contadorProductos);
		fabricanteIngresado=prompt("Ingrese el fabricante del producto #"+contadorProductos);
		//switch para contar veces que se compra un producto y sumar cantidad, alcohol mas barato 
		switch (tipoIngresado)
		{
			case "jabón":
			unidadesDeJabon+=unidadesIngresadas;
			contadorDeJabon++;
			break;
			case "alcohol":
			contadorDeAlcohol++;
			unidadesDeAlcohol+=unidadesIngresadas;
			if (contadorDeAlcohol==1) 
			{
				alcoholBarato=precioIngresado;
				unidadesAlcoholBarato=unidadesIngresadas;
				fabricanteAlcoholBarato=fabricanteIngresado;
			} else 
			{
				if (alcoholBarato>precioIngresado) 
				{
					unidadesAlcoholBarato=unidadesIngresadas;
					fabricanteAlcoholBarato=fabricanteIngresado;
					alcoholBarato=precioIngresado;
				}
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
	alert("Se compraron en total "+unidadesDeJabon+" unidades de jabón.");
}
