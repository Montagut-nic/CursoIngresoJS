/* Nicolas Montagut Parcial 2020 ejercicio 3
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo") y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	let nombreIngresado;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperaturaCorporalIngresada;
	let respuesta;
	let mayorTemperatura;
	let personaConMayorTemperatura;
	let contadorDePersonas;
	let contadorDeViudosMayoresDeEdad;
	let contadorHombresSolteros;
	let contadorHombresSolterosYViudos;
	let contadorTerceraEdadConTemperaturaAlta;
	let sumadorDeEdadesDeHombresSolteros;
	let promedioDeEdadesDeHombresSolteros;

	contadorDePersonas=0;
	contadorDeViudosMayoresDeEdad=0;
	contadorHombresSolteros=0;
	contadorHombresSolterosYViudos=0;
	contadorTerceraEdadConTemperaturaAlta=0;
	sumadorDeEdadesDeHombresSolteros=0;
	respuesta="si";

	while(respuesta=="si")
	{
		contadorDePersonas++;
		//tomo nombre + validacion
		nombreIngresado=prompt("Ingrese el nombre del pasajero #"+contadorDePersonas);
		while (isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("Ingrese el nombre del pasajero #"+contadorDePersonas);
		}
		//tomo edad + validacion
		edadIngresada=prompt("Ingrese la edad de "+nombreIngresado+", en el caso de menores de 1 año ingrese 0");
		edadIngresada=parseInt(edadIngresada);
		while (isNaN(edadIngresada)||edadIngresada<0||edadIngresada>100)
		{
			edadIngresada=prompt("Error. Ingrese la edad de "+nombreIngresado+", en el caso de menores de 1 año ingrese 0. Ingrese una edad válida entre 0 y 100.");
			edadIngresada=parseInt(edadIngresada);
		}
		//tomo sexo + validacion
		sexoIngresado=prompt("Ingrese el sexo de "+nombreIngresado+". Ingrese f para femenino o m para masculino.");
		while (isNaN(sexoIngresado)==false||(sexoIngresado!="f"&&sexoIngresado!="m"))
		{
			sexoIngresado=prompt("Error. Ingrese el sexo de "+nombreIngresado+". Ingrese un sexo válido: f para femenino o m para masculino.");
		}
		//tomo estado civil + validacion
		estadoCivilIngresado=prompt("Ingrese el estado civil de "+nombreIngresado);
		while(isNaN(estadoCivilIngresado)==false||(estadoCivilIngresado!="casado"&&estadoCivilIngresado!="soltero"&&estadoCivilIngresado!="viudo"))
		{
			estadoCivilIngresado=prompt("Ingrese el estado civil de "+nombreIngresado+". Ingrese un estado civil válido: soltero, casado o viudo");
		}
		//tomo temperatura corporal + validacion
		temperaturaCorporalIngresada=prompt("Ingrese la temperatura corporal de "+nombreIngresado);
		temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
		while(isNaN(temperaturaCorporalIngresada)||temperaturaCorporalIngresada>45||temperaturaCorporalIngresada<30)
		{
		temperaturaCorporalIngresada=prompt("Ingrese la temperatura corporal de "+nombreIngresado+". Ingrese una temperatura corporal válida de entre 30 y 45 grados.");
		temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
		}
		//persona con mayor temperatura y su nombre
		if (contadorDePersonas==1)
		{
			personaConMayorTemperatura=nombreIngresado;
			mayorTemperatura=temperaturaCorporalIngresada;
		} else
		{
			if (mayorTemperatura<temperaturaCorporalIngresada)
			{
				personaConMayorTemperatura=nombreIngresado;
				mayorTemperatura=temperaturaCorporalIngresada;
			}
		}
		//hombres solteros y-o viudos, mayores de edad viudos, tercera edad con +38 temperatura
		switch(sexoIngresado)
		{
			case "m":
			switch(estadoCivilIngresado)
			{
				case "soltero":
				contadorHombresSolteros++;
				sumadorDeEdadesDeHombresSolteros+=edadIngresada;
				case "viudo":
				contadorHombresSolterosYViudos++;
				break;
			}
			default:
			if (edadIngresada>17&&estadoCivilIngresado=="viudo") 
			{
				contadorDeViudosMayoresDeEdad++;
			}
			if (edadIngresada>60&&temperaturaCorporalIngresada>38)
			{
				contadorTerceraEdadConTemperaturaAlta++;
			}
			break;
		}
		//respuesta + validacion respuesta
		respuesta=prompt("Desea seguir registrando pasajeros? si/no");
		while (isNaN(respuesta)==false||(respuesta!="si"&&respuesta!="no"))
		{
			respuesta=prompt("Desea seguir registrando pasajeros? Escriba si o no.");
		}
	}
	promedioDeEdadesDeHombresSolteros=sumadorDeEdadesDeHombresSolteros/contadorHombresSolteros;

	alert("La persona con la temperatura más alta es: "+personaConMayorTemperatura);
	alert("La cantidad de personas mayores de edad viudos es: "+contadorDeViudosMayoresDeEdad);
	alert("La cantidad de hombres solteros o viudos es: "+contadorHombresSolterosYViudos);
	alert("La cantidad de personas de la tercera edad con temperatura mayor a 38 grados es: "+contadorTerceraEdadConTemperaturaAlta);
	alert("El promedio de edad de hombres solteros es: "+promedioDeEdadesDeHombresSolteros);
}
