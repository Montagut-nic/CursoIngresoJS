/* Nicolas Montagut Ejercicio 7 WHILE

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;
	let promedio;
	
	contador=0;
	acumulador=0;
	respuesta="si";

	while (respuesta=="si") 
	{
		contador++;
		numeroIngresado=prompt("Ingrese el número #"+contador);
		while (isNaN(numeroIngresado))
		{
			alert("Ingrese un número.");
			numeroIngresado=prompt("Ingrese el número #"+contador);
		}
		numeroIngresado=parseInt(numeroIngresado);
		acumulador+=numeroIngresado;
		respuesta=prompt("Desea continuar?","si/no");
	}

	promedio=acumulador/contador;

	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=promedio;
}//FIN DE LA FUNCIÓN