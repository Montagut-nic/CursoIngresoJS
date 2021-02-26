/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos 
nos pide realizar una carga de datos validada e ingresada por ventanas emergentes 
solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edad;
 	let sexo;
 	let estadoCivil;
 	let sueldo;
 	let legajo;
 	let nacionalidad;

 	while (isNaN(edad)||edad>90||edad<18)
 	{
		edad=prompt("Ingrese su edad. Esta encuesta es para personas entre 18 y 90 años inclusive.","Ej: 18");
 		edad=parseInt(edad);
 	}
 	while (sexo!="M"&&sexo!="F")
 	{
		sexo=prompt("Ingrese su sexo: F para femenino o M para masculino.","Ej: F");
 	}
 	while (isNaN(estadoCivil)||estadoCivil>4||estadoCivil<1)
 	{
		estadoCivil=prompt("Ingrese su estado civil: 1 para solteros, 2 para casados, 3 para divorciados o 4 para viudos.","Ej: 1");
 		estadoCivil=parseInt(estadoCivil);
 	}
 	while (isNaN(sueldo)||sueldo<8000)
 	{
		sueldo=prompt("Ingrese su sueldo bruto, no menor a 8000.","Ej: 10000");
 		sueldo=parseInt(sueldo);
 	}
 	while (isNaN(legajo)||legajo>9999||legajo<1000)
 	{
		legajo=prompt("Ingrese su numéro de legajo de 4 cifras.","Ej: 1234");
 		legajo=parseInt(legajo);
 	}
 	while (nacionalidad!="N"&&nacionalidad!="E"&&nacionalidad!="A")
 	{
		nacionalidad=prompt("Ingrese su nacionalidad: A para argentinos, E para extranjeros, N para nacionalizados.","Ej: N");
 	}

 	switch (sexo)
 	{
 		case "F":
 		sexo="femenino";
 		break;
 		case "M":
 		sexo="masculino";
 		break;
 	}
 	switch (estadoCivil)
 	{
 		case 1:
 		estadoCivil="soltero";
 		break;
 		case 2:
 		estadoCivil="casado";
 		break;
 		case 3:
 		estadoCivil="divorciado";
 		break;
 		case 4:
 		estadoCivil="viudo";
 		break;
 	}
 	switch (nacionalidad)
 	{
 		case "A":
 		nacionalidad="argentina";
 		break;
 		case "N":
 		nacionalidad="nacionalizado";
 		break;
 		case "E":
 		nacionalidad="extranjera";
 		break;
 	}

 	document.getElementById('txtIdEdad').value=edad
 	document.getElementById('txtIdSexo').value=sexo
 	document.getElementById('txtIdEstadoCivil').value=estadoCivil
 	document.getElementById('txtIdSueldo').value=sueldo
 	document.getElementById('txtIdLegajo').value=legajo
 	document.getElementById('txtIdNacionalidad').value=nacionalidad

}
