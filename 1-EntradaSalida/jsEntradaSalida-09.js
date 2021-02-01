/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let aumentado;
	aumentado=parseInt(txtIdSueldo.value)+parseInt(txtIdSueldo.value)*0.10;
	txtIdResultado.value=aumentado;
}
