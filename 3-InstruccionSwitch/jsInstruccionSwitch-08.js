/* Nicolas Montagut 
Ejercicio switch 8 : Al seleccionar un destino informar:
si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	let destino=document.getElementById('txtIdDestino').value;
	
	switch (destino) 
	{
		case "Ushuaia":
		case "Bariloche":
		{
			alert ("Frío.");
			break;
		}
		case "Mar del plata":
		case "Cataratas":
		{
			alert ("Calor.");
			break;
		}
	}
}//FIN DE LA FUNCIÓN