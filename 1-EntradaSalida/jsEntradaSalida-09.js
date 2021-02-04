/* 9bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let porcentajeAumento;
	let aumentado;

	sueldo=document.getElementById('txtIdSueldo').value;
	porcentajeAumento = prompt("Ingrese el porcentaje del aumento", "ej: 10");
	
	sueldo=parseInt(sueldo);
	porcentajeAumento=parseInt(porcentajeAumento);

	porcentajeAumento=porcentajeAumento/100
	aumentado=sueldo+sueldo*porcentajeAumento;

	document.getElementById('txtIdResultado').value=aumentado;
}
