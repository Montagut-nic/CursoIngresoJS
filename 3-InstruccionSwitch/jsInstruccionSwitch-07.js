/* Nicolas Montagut 
Ejercicio switch 7 : Al selecionar un destino,
indicar el punto cardinal de nuestro pais en donde se encuentra:
Norte, Sur, Este u Oeste
*/
function mostrar()
{
	let destino=document.getElementById('txtIdDestino').value;
	
	switch (destino) 
	{
		case "Ushuaia":
		{
			alert ("Sur.");
			break;
		}
		case "Bariloche":
		{
			alert ("Oeste.");
			break;
		}
		case "Cataratas":
		{
			alert ("Norte.");
			break;
		}
		case "Mar del plata":
		{
			alert ("Este.");
			break;
		}
	}
}//FIN DE LA FUNCIÓN