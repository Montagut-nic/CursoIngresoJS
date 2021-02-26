/* Nicolas Montagut Ejercicio 8 WHILE

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;
	
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";

	while (respuesta=="si") 
	{
		numeroIngresado=prompt("Ingrese un número");
		while (isNaN(numeroIngresado))
		{
			alert("Error. Ingrese un número.");
			numeroIngresado=prompt("Ingrese un número");
		}
		numeroIngresado=parseInt(numeroIngresado);
		if (numeroIngresado<0) 
		{
			multiplicacionNegativos*=numeroIngresado;
		}
		else 
		{
			sumaPositivos+=numeroIngresado;
		}
		respuesta=prompt("Desea continuar?","si/no");
	}

	document.getElementById('txtIdSuma').value=sumaPositivos;
	document.getElementById('txtIdProducto').value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN