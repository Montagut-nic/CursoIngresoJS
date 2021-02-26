/* Nicolas Montagut Ejercicio 5 WHILE

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexo;
	sexo = prompt("ingrese f o m .");
	
	while (sexo!="f"&&sexo!="m")
	{
		sexo = prompt("ingrese f o m .");
	}

	document.getElementById('txtIdSexo').value=sexo;
}//FIN DE LA FUNCIÓN