/* Nicolas Montagut Parcial 2020 ejercicio 2
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo con mas cantidad de bolsas.
d) El tipo mas caro
*/
function mostrar()
{
	let tipoDeProductoIngresado;
	let cantidadDeBolsasIngresado;
	let precioXBolsa;
	let respuesta;
	let importeTotalBruto;
	let importeTotalDescontado;
	let sumaDeBolsas;
	let precioParcial;
	let sumadorBolsasCal;
	let sumadorBolsasCemento;
	let sumadorBolsasArena;
	let contadorDeProductos;
	let tipoMasCaro;
	let precioMasCaro;

	respuesta="si";
	sumaDeBolsas=0;
	importeTotalBruto=0;
	sumadorBolsasArena=0;
	sumadorBolsasCemento=0;
	sumadorBolsasCal=0;
	contadorDeProductos=0;


	while (respuesta=="si")
	{
		contadorDeProductos++;
		//el tipo de producto + validacion
		tipoDeProductoIngresado=prompt("Producto #"+contadorDeProductos+". Ingrese el tipo de producto.");
		while(isNaN(tipoDeProductoIngresado)==false&&tipoDeProductoIngresado!="arena"&&tipoDeProductoIngresado!="cal"&&tipoDeProductoIngresado!="cemento")
		{
			tipoDeProductoIngresado=prompt("Error. Producto #"+contadorDeProductos+". Ingrese el tipo de producto: cemento, cal o arena.");
		}
		//la cantidad de bolsas + validacion
		cantidadDeBolsasIngresado=prompt("Ingrese la cantidad de bolsas.");
		cantidadDeBolsasIngresado=parseInt(cantidadDeBolsasIngresado);
		while (isNaN(cantidadDeBolsasIngresado)||cantidadDeBolsasIngresado<1)
		{
			cantidadDeBolsasIngresado=prompt("Error. Ingrese la cantidad de bolsas. Debe ser mayor a 0.");
			cantidadDeBolsasIngresado=parseInt(cantidadDeBolsasIngresado);
		}
		//el precio por bolsa + validacion
		precioXBolsa=prompt("Ingrese el precio por bolsa.");
		precioXBolsa=parseInt(precioXBolsa);
		while(isNaN(precioXBolsa)||precioXBolsa<1)
		{
		precioXBolsa=prompt("Error. Ingrese el precio por bolsa. Debe ser mayor a 0.");
		precioXBolsa=parseInt(precioXBolsa);
		}
		//sumador de bolsas totales, precio de la compra del producto ingresado y suma al importe total
		sumaDeBolsas+=cantidadDeBolsasIngresado;
		precioParcial=cantidadDeBolsasIngresado*precioXBolsa;
		importeTotalBruto+=precioParcial;
		//sumador de bolsas por tipo de producto
		switch(tipoDeProductoIngresado)
		{
			case "arena":
			sumadorBolsasArena+=cantidadDeBolsasIngresado;
			break;
			case "cemento":
			sumadorBolsasCemento+=cantidadDeBolsasIngresado;
			break;
			case "cal":
			sumadorBolsasCal+=cantidadDeBolsasIngresado;
			break;
		}
		//tipo de producto mas caro
		if (contadorDeProductos==1)
		{
			tipoMasCaro=tipoDeProductoIngresado;
			precioMasCaro=precioXBolsa;
		} else
		{
			if (precioMasCaro<precioXBolsa) 
			{
				tipoMasCaro=tipoDeProductoIngresado;
				precioMasCaro=precioXBolsa;
			}
		}
		respuesta=prompt("Desea continuar ingresando productos?","si/no");
	}
	//aplicacion de descuentos, alerts para informar al usuario
	if (sumaDeBolsas<10) 
	{
		alert("El importe total a pagar es: $"+importeTotalBruto);
	} else 
	{
		if (sumaDeBolsas>30) 
		{
			importeTotalDescontado = importeTotalBruto - importeTotalBruto*0.25;
			importeTotalDescontado=importeTotalDescontado.toFixed(2);
			alert("El importe total sin descuento sería: $"+importeTotalBruto);
			alert("El importe total con descuento es: $"+importeTotalDescontado);
		} else 
		{
			importeTotalDescontado = importeTotalBruto - importeTotalBruto*0.15;
			importeTotalDescontado=importeTotalDescontado.toFixed(2);
			alert("El importe total sin descuento sería: $"+importeTotalBruto);
			alert("El importe total con descuento es: $"+importeTotalDescontado);
		}
	}
	//tipo de producto con más bolsas
	if (sumadorBolsasCal>sumadorBolsasCemento&&sumadorBolsasCal>sumadorBolsasArena) 
	{
		alert("El tipo de producto con mayor cantidad de bolsas es: cal.");
	} else
	{
		if (sumadorBolsasArena>sumadorBolsasCemento)
		{
			alert("El tipo de producto con mayor cantidad de bolsas es: arena.");
		}else 
		{
			alert("El tipo de producto con mayor cantidad de bolsas es: cemento.");
		}
	}
	//informo al usuario del tipo de producto mas caro
	alert("El producto más caro es: "+tipoMasCaro);
}
