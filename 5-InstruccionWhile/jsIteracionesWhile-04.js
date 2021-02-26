/* Nicolas Montagut Ejercicio 4 WHILE

al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);

	while (numero>9||numero<1||isNaN(numero))
	{
		alert("Error. Ingrese un número entre 0 y 10.")
		numero = prompt("ingrese un número entre 0 y 10.");
		numero=parseInt(numero);
	}
	document.getElementById('txtIdNumero').value=numero;
	
}//FIN DE LA FUNCIÓN