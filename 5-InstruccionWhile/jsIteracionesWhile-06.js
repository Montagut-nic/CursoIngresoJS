/* Nicolas Montagut Ejercicio 6 WHILE

Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;

	contador=0;
	acumulador=0;

	while (contador<5)
	{
		contador++;
		numeroIngresado=prompt("Ingrese el número #"+contador);
		while (isNaN(numeroIngresado))
		{
			alert("Error. Ingrese un número.");
			numeroIngresado=prompt("Ingrese el número #"+contador);
		}
		numeroIngresado=parseInt(numeroIngresado);
		acumulador+=numeroIngresado;
	}

	promedio = acumulador/contador;
	
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=promedio;
}//FIN DE LA FUNCIÓN