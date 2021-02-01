/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var suNombre=prompt('igrese su nombre','su nombre');
	document.getElementById('txtIdNombre').value = suNombre;
}

