/* Nicolas Montagut ejercicio 7 FOR
al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado,
y mostrar la cantidad de numeros divisores encontrados.
*/
function mostrar()
{
	/*
	let numeroIngresado;
	let contadorDeDivisores;
	contadorDeDivisores=0;
	numeroIngresado=prompt("Ingrese un número");
	numeroIngresado=parseInt(numeroIngresado);
	for (base=0; base<(numeroIngresado+1) ; base++) 
	{
		if (numeroIngresado%base==0) 
		{
			contadorDeDivisores++;
			document.write("<br>"+base);
		}
	}
	document.write("<br> La cantidad de números divisores es: "+contadorDeDivisores);
	*/

	let mayorNegativo;
	let menorPar;
	let numeroIngresado;
	let banderaNegativo;
	let banderaPar;

	banderaNegativo=1;
	banderaPar=1;

	for (contador = 0; contador < 10 ; contador++) 
	{
		numeroIngresado=prompt("Ingrese el número #"+(contador+1));
		numeroIngresado=parseInt(numeroIngresado);
		while (isNaN(numeroIngresado))
		{
			numeroIngresado=prompt("Ingrese el número #"+(contador+1));
			numeroIngresado=parseInt(numeroIngresado);
		}
		if (numeroIngresado<0&&(banderaNegativo==1||numeroIngresado>mayorNegativo)) 
		{
			banderaNegativo=0;
			mayorNegativo=numeroIngresado;
		}
		if (numeroIngresado%2==0&&(banderaPar==1||numeroIngresado<menorPar)) 
		{
			banderaPar=0;
			menorPar=numeroIngresado;
		}
	}
	if (banderaPar==0)
	{
		alert("el menor de los pares es: "+menorPar);
	}
	if (banderaNegativo=="hay negativos") 
	{
		alert("el mayor de los negativos es: "+mayorNegativo);
	}
	
} //FIN DE LA FUNCIÓN

/* Ejercicio for 9 bis 
pedir 10 numeros, informar el mayor de los negativos 
y el menor de los pares solo si los hay
*/
 