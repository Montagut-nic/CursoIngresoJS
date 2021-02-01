/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let descuento;
	descuento=parseInt(txtIdImporte.value)-parseInt(txtIdImporte.value)*0.25;
	txtIdResultado.value=descuento;
}
