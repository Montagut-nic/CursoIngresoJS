function mostrar()
{
	let edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	if (edad<13 || edad>17)
	{
		alert("no es adolescente");
	}

}//FIN DE LA FUNCIÓN