/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let descontado;
	let importe;
	importe = parseInt(document.getElementById('txtIdImporte').value);
	descontado=importe-importe*0.25;
	document.getElementById('txtIdResultado').value=descontado;
}
