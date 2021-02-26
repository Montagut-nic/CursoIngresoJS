/* Nicolas Montagut Ejercicio 9 bis WHILE

Al presionar el botón pedir nombres y edades  hasta que el usuario quiera,
mostrar la edad del mas joven y la edad del mas viejo ingresado.
informar nombre de la persona mas joven y de la mas vieja*/
function mostrar()
{	// declarar variables
	let elPrimero;
	let edadIngresada;
	let nombreIngresado;
	let edadMasViejo;
	let edadMasJoven;
	let respuesta;
	let nombreDelMasViejo;
	let nombreDelMasJoven;
	let contador;

	//iniciar variables	
	elPrimero="es el primero";
	respuesta="si";
	contador=0;

	while(respuesta=="si")
	{
		contador++;
		nombreIngresado=prompt("Ingrese un nombre de la persona #"+contador);
		do 
		{
			edadIngresada=prompt("Ingrese la edad de "+nombreIngresado);
			edadIngresada=parseInt(edadIngresada);
		} while (isNaN(edadIngresada)||edadIngresada<1);
		if (elPrimero=="es el primero") 
		{
			edadMasJoven=edadIngresada;
			edadMasViejo=edadIngresada;
			nombreDelMasJoven=nombreIngresado;
			nombreDelMasViejo=nombreIngresado;
			elPrimero="NO es el primero";
		} else 
		{
			if (edadIngresada<edadMasJoven) 
			{
				edadMasJoven=edadIngresada;
				nombreDelMasJoven=nombreIngresado;
			}
			if (edadIngresada>edadMasViejo) 
			{
				edadMasViejo=edadIngresada;
				nombreDelMasViejo=nombreIngresado;
			}
		}
		respuesta=prompt("desea continuar?","si/no");
	}

	document.getElementById('txtIdMaximo').value=edadMasViejo;
	document.getElementById('txtIdMinimo').value=edadMasJoven;
	alert("La persona más vieja es: "+nombreDelMasViejo);
	alert("La persona más joven es: "+nombreDelMasJoven);
}//FIN DE LA FUNCIÓN