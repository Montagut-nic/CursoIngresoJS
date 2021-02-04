/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descontado;
	
	importe = document.getElementById('txtIdImporte').value;
	importe = parseInt(importe);

	descontado=importe-importe*0.25;
	
	document.getElementById('txtIdResultado').value=descontado;
}
