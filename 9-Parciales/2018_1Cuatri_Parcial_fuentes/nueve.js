/* Nicolas Montagut Ejercicio 9 Parcial 2018
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.
*/
function mostrar()
{
	let marca;
	let peso;
	let temperatura;
	let respuesta;
	let elPrimero;
	let cantidadTemperaturaPar;
	let cantidadProductosACeroGrados;
	let productoMasPesado;
	let promedioPeso;
	let pesoMaximo;
	let pesoMinimo;
	let contadorProductos;
	let sumaDePesos;

	respuesta="si";
	elPrimero="es el primero";
	cantidadTemperaturaPar=0;
	cantidadProductosACeroGrados=0;
	contadorProductos=0;
	sumaDePesos=0;

	while (respuesta=="si")
	{
		contadorProductos++;
		marca=prompt("Ingrese la marca del producto #"+contadorProductos);
		do
		{
			peso=prompt("Ingrese el peso del producto #"+contadorProductos+", debe ser entre 1 y 100 inclusive.");
			peso=parseInt(peso);
		} while(isNaN(peso)||peso<1||peso>100);
		sumaDePesos+=peso;
		if (elPrimero=="es el primero") 
		{
			pesoMinimo=peso;
			pesoMaximo=peso;
			productoMasPesado=marca;
			elPrimero="NO es el primero";
		}
		else 
		{
			if (peso>pesoMaximo) 
			{
				pesoMaximo=peso;
				productoMasPesado=marca;
			}
			if (peso<pesoMinimo) 
			{
				pesoMinimo=peso;
			}
		}
		do
		{
			temperatura=prompt("Ingrese la temperatura de almacenamiento del producto #"+contadorProductos+". Debe ser entre 30 y -30 grados inclusive.");
			temperatura=parseInt(temperatura);
		} while (isNaN(temperatura)||temperatura<-30||temperatura>30);
		if (temperatura==0) 
		{
			cantidadProductosACeroGrados++;
		}
		if (temperatura%2==0) 
		{
			cantidadTemperaturaPar++;
		}
		respuesta=prompt("desea continuar agregando productos?","si/no");	
	}
	promedioPeso=sumaDePesos/contadorProductos;

	document.write("<br> la cantidad de temperaturas pares es: "+cantidadTemperaturaPar);
	document.write("<br> la marca del producto más pesado es: "+productoMasPesado);
	document.write("<br> la cantidad de productos que se conservan a 0 grados es: "+cantidadProductosACeroGrados);
	document.write("<br> el promedio del peso de todos los productos es: "+promedioPeso);
	document.write("<br> el peso máximo es: "+pesoMaximo);
	document.write("<br> el peso mínimo es: "+pesoMinimo);
}
