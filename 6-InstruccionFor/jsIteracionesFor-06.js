/* Nicolas Montagut ejercicio 6 FOR
al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.
*/
function mostrar()
{
	let numeroIngresado;
	let contadorDePares;
	contadorDePares=0;
	numeroIngresado=prompt("Ingrese un número");
	numeroIngresado=parseInt(numeroIngresado);
	for (base=1; base<(numeroIngresado+1) ; base++) 
	{
		if (base%2==0) 
		{
			contadorDePares++;
			document.write("<br>"+base);
		}
	}
	document.write("<br> La cantidad de números pares es: "+contadorDePares);
}//FIN DE LA FUNCIÓN