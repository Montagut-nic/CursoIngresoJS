/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largo;
	let ancho;
	let perimetro;
	let alambre;

	largo = document.getElementById('txtIdLargo').value;
	ancho = document.getElementById('txtIdAncho').value;

	ancho = parseFloat(ancho);
	largo = parseFloat(largo);

	perimetro=2*(ancho+largo);
	alambre = perimetro*3;

	alert("Hay que comprar "+alambre+" metros de alambre.");
}
function Circulo () 
{
	let radio;
	let perimetro;
	let alambre;
	const PI = Math.PI;

	radio = document.getElementById('txtIdRadio').value;
	radio = parseFloat(radio);
	
	perimetro = 2*PI*radio;
	alambre = 3*perimetro;
	alambre = alambre.toFixed(2);

	alert("Hay que comprar "+alambre+" metros de alambre.");
}
function Materiales () 
{
	let ancho;
	let largo;
	let area;
	let cemento;
	let cal;

	largo = document.getElementById('txtIdLargo').value;
	ancho = document.getElementById('txtIdAncho').value;

	ancho = parseFloat(ancho);
	largo = parseFloat(largo);

	area = largo*ancho;

	cemento = area*2;
	cal = area*3;

	cemento = cemento.toFixed(0);
	cal = cal.toFixed(0);
	area = area.toFixed(2);

	alert ("Se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal para un area de "+area+"m2.");
}