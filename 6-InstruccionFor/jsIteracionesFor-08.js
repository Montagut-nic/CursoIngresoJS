/* Nicolas Montagut ejercicio 8 FOR
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/
function mostrar()
{
	/* let numeroIngresado;
	let esPrimo;
	esPrimo="es primo"
	numeroIngresado=prompt("Ingrese un número");
	numeroIngresado=parseInt(numeroIngresado);
	//numeroIngresado=Math.floor(Math.random() * 10000);
	//alert(numeroIngresado);
	for (base=2; base<numeroIngresado ; base++) 
	{
		if (base!=numeroIngresado&&numeroIngresado%base==0) 
		{
			esPrimo="no es primo";
			break;
		}
	}
	if (numeroIngresado==1||numeroIngresado==0) 
	{
		esPrimo="no es primo";
	}
	alert(esPrimo);
	*/

	let nombre;
	let sexo;
	let edad;
	let altura;
	let nombreMasAlto;
	let sexoMasAlto;
	let alturaMayor;
	let banderaMasAlto;

	banderaMasAlto=1;

	for (contador=0; contador<5; contador++) 
	{
		nombre=prompt("Ingrese el nombre para el #"+(contador+1));
		while (isNaN(nombre)==false)
		{
			nombre=prompt("Ingrese un nombre válido para el #"+(contador+1));
		}

		sexo=prompt("Ingrese el sexo de "+nombre+". f para femenino, m para masculino.");
		while (isNaN(sexo)==false||(sexo!="f"&&sexo!="m"))
		{
			sexo=prompt("Ingrese el sexo de "+nombre+". f para femenino, m para masculino.");
		}

		edad=prompt("Ingrese la edad de "+nombre);
		edad=parseInt(edad);
		while (isNaN(edad)||((sexo=="f"&&(edad>17||edad<13))||(sexo=="m"&&edad>12)))
		{
			edad=prompt("Ingrese una edad válida para "+nombre);
			edad=parseInt(edad);
		}

		altura=prompt("Ingrese la altura de "+nombre+" en centímetros");
		altura=parseInt(altura);
		while (isNaN(altura)|| altura < 50 || altura>200)
		{
			altura=prompt("Ingrese una altura válida para "+nombre+" en centímetros");
			altura=parseInt(altura);
		}

		if (banderaMasAlto==1||altura>alturaMayor) 
		{
			banderaMasAlto=0;
			alturaMayor=altura;
			nombreMasAlto=nombre;
			sexoMasAlto=sexo;
		}
	}

	if (sexoMasAlto=="f") 
	{
		alert("la persona más alta es "+nombreMasAlto+" que es mujer");
		
	}
	else 
	{
		alert("la persona más alta es "+nombreMasAlto+" que es hombre");
	}

}//FIN DE LA FUNCIÓN
/*
For 10 pedir a 5 personas nombre, sexo, edad
validar que solo sean hombres no mayores a 12 y que las mujeres sean mayores de edad
, altura(rangos que quiera)
*/
/*
For 11 pedir a 5 personas nombre, sexo, edad
(validar que solo sean hombres no mayores a 12 y que las mujeres sean ADOLESCENTES),
 altura(rangos que quiera)) ... informar el sexo y nombre de la persona mas alta
*/