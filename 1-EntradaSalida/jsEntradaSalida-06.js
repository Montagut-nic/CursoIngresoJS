/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let resultado;
	let num1;
	let num2;

	num1 = document.getElementById('txtIdNumeroUno').value;
	num2 = document.getElementById('txtIdNumeroDos').value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado = num1 + num2;
	
	alert("la suma es "+resultado);
}

