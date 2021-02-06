function mostrar()
{
	let edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	if (edad<13)
	{
		alert("eres un niño");
	}
	else
	{
		if (edad<18) 
		{
			alert("eres adolescente");
		}
		else 
		{
			alert("eres mayor de edad");
		}
	} 
	
}//FIN DE LA FUNCIÓN