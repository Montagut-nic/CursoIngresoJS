/* Nicolas Montagut ejercicio 5 FOR
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
Utilizar 'BREAK'
*/function mostrar()
{
	for (pedido=0;;) {
		pedido=prompt("ingrese 9");
		pedido=parseInt(pedido);
		if (pedido==9) 
		{
			break;
		}
	}
}//FIN DE LA FUNCIÓN