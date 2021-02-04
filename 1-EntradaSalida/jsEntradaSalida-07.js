/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

let num1;
let num2;
num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
num2 = parseInt(document.getElementById('txtIdNumeroDos').value);

function sumar()
{	
	let suma;
	suma = num1+num2;
	alert("El resultado de la suma es "+suma);	
}

function restar()
{
	let resta;
	resta=num1-num2;
	alert ("El resultado de la resta es "+resta);
}

function multiplicar()
{ 
	let multiplicación;
	multiplicación=num1*num2;
	alert ("El resultado de la multiplicación es "+multiplicación);
}

function dividir()
{
	let división;
	división=num1/num2;
	alert ("El resultado de la división es "+división);
}

