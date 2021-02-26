/* Nicolas Montagut ejercicio 3 FOR
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/
function mostrar()
{
	let repeticiones; 
	repeticiones = prompt("ingrese el número de repeticiones");
	repeticiones = parseInt(repeticiones);
	for (saludo=0; saludo < repeticiones; saludo++) {
		document.write("<br> Hola UTN FRA");
	}
}//FIN DE LA FUNCIÓN