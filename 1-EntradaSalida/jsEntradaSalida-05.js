/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var apellidoIngresado;
	var edadIngresada;

	nombreIngresado=document.getElementById('txtIdNombre').value;
	edadIngresada=document.getElementById('txtIdEdad').value;
	apellidoIngresado= prompt("Ingrese su apellido","Su apellido va aquí");

	alert("Usted se llama "+nombreIngresado+" "+apellidoIngresado+" y tiene "+edadIngresada+" años.");
}