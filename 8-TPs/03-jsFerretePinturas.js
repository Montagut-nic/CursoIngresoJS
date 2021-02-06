/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaFahr;
	let temperaturaCent;

	temperaturaFahr = document.getElementById('txtIdTemperatura').value;
	temperaturaFahr = parseFloat(temperaturaFahr);

	temperaturaCent = (temperaturaFahr - 32)/1.8;
	temperaturaCent = temperaturaCent.toFixed(2);

	alert(temperaturaFahr+" Fahrenheit son "+temperaturaCent+" centígrados.");
}

function CentigradosFahrenheit () 
{
	let temperaturaFahr;
	let temperaturaCent;

	temperaturaCent=document.getElementById('txtIdTemperatura').value;
	temperaturaCent=parseFloat(temperaturaCent);

	temperaturaFahr=temperaturaCent*1.8+32;
	temperaturaFahr=temperaturaFahr.toFixed(2);

	alert(temperaturaCent+" centígrados son "+temperaturaFahr+" Fahrenheit.");
}
