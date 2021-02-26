/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada!="utn750") 
	{
		alert("clave incorrecta.")
		claveIngresada = prompt("ingrese el número clave.");
	}
	
	alert("clave correcta.");
	
}//FIN DE LA FUNCIÓN
