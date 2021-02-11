/* Nicolas Montagut 
Ejercicio switch 9 : una agencia de viajes debe sacar las tarifas de los viajes,
se cobra $15.000 por cada estadia como base,
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final.

en Invierno: bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%.

en Verano: bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%.

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% 
y Cordoba tiene el precio sin descuento.
*/
function mostrar()
{
	let estacion=document.getElementById('txtIdEstacion').value;
	let destino=document.getElementById('txtIdDestino').value;
	const tarifa = 15000;
	let precioFinal;
	
	switch (estacion) 
	{
		case "Invierno": 
		{
			switch(destino) 
			{
				case "Bariloche":
				{
					precioFinal=tarifa+tarifa*.2;
					break;
				}
				case "Mar del plata":
				{
					precioFinal=tarifa-tarifa*.2;
					break;
				}
				default:
				{
					precioFinal=tarifa-tarifa*.1;
				}
			}
			break;
		}
		case "Verano":
		{
			switch(destino) 
			{
				case "Bariloche":
				{
					precioFinal=tarifa-tarifa*.2;
					break;
				}
				case "Mar del plata":
				{
					precioFinal=tarifa+tarifa*.2;
					break;
				}
				default:
				{
					precioFinal=tarifa+tarifa*.1;
				}
			}
			break;
		}
		default:
		{
			switch(destino) 
			{
				case "Cordoba":
				{
					precioFinal=tarifa;
					break;
				}
				default:
				{
					precioFinal=tarifa+tarifa*.1;
				}
			}
		}
	}
	precioFinal=precioFinal.toFixed(2);
	alert("El precio final es: $"+precioFinal);
}//FIN DE LA FUNCIÓN