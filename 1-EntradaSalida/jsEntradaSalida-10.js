/* 10bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let porcentajeDescuento;
	let descontado;
	
	importe = document.getElementById('txtIdImporte').value;
	porcentajeDescuento = prompt ("Ingrese el procentaje del descuento","ej: 50");

	importe = parseInt(importe);
	porcentajeDescuento = parseInt(porcentajeDescuento);

	porcentajeDescuento=porcentajeDescuento/100;
	descontado=importe-importe*porcentajeDescuento;

	document.getElementById('txtIdResultado').value=descontado;
}
