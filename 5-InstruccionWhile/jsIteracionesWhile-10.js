/* Nicolas Montagut Ejercicio 10 WHILE

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let cantidadPositivos=0;
	let cantidadNegativos=0;
	let cantidadCeros=0;
	let cantidadPares=0;
	let promedioPositivos;
	let promedioNegativos;
	let diferenciaPositivoNegativo;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un número.");
		while (isNaN(numeroIngresado))
		{
			alert("Error. Ingrese un número.");
			numeroIngresado=prompt("Ingrese un NÚMERO.","ej: 1");
		}
		numeroIngresado=parseInt(numeroIngresado);
		if (numeroIngresado<0) 
		{
			cantidadNegativos++;
			sumaNegativos+=numeroIngresado;
		} else 
		{
			if (numeroIngresado>0) 
			{
				cantidadPositivos++;
				sumaPositivos+=numeroIngresado;
			} else 
			{
				cantidadCeros++;
			}
		}
		if (numeroIngresado%2==0) 
		{
			cantidadPares++;
		}
		respuesta=prompt("desea continuar?","si/no");
	}//fin del while
	promedioNegativos=sumaNegativos/cantidadNegativos;
	promedioPositivos=sumaPositivos/cantidadPositivos;
	diferenciaPositivoNegativo=sumaPositivos - sumaNegativos;

	document.write("<br> la suma de negativos es: "+sumaNegativos);
	document.write("<br> la suma de positivos es: "+sumaPositivos);
	document.write("<br> la cantidad de positivos es: "+cantidadPositivos);
	document.write("<br> la cantidad de negativos es: "+cantidadNegativos);
	document.write("<br> la cantidad de ceros es: "+cantidadCeros);
	document.write("<br> la cantidad de números pares es: "+cantidadPares);
	document.write("<br> el promedio de positivos es: "+promedioPositivos);	
	document.write("<br> el promedio de negativos es: "+promedioNegativos);
	document.write("<br> la diferencia entre positivos y negativos (positvos-negativos) es: "+diferenciaPositivoNegativo);

}//FIN DE LA FUNCIÓN