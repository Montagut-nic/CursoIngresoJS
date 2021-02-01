/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let suma;
	suma = parseInt(txtIdNumeroUno.value) + parseInt(txtIdNumeroDos.value);
	alert("la suma es "+suma);	
}

function restar()
{
	let resta;
	resta=parseInt(txtIdNumeroUno.value)+parseInt(txtIdNumeroDos.value);
	alert ('la resta es '+resta);
}

function multiplicar()
{ 
	let multiplicación;
	multiplicación=parseInt(txtIdNumeroUno.value)*parseInt(txtIdNumeroDos.value);
	alert ('la multiplicación es '+multiplicación);
}

function dividir()
{
	let división;
	división=parseInt(txtIdNumeroUno.value)/parseInt(txtIdNumeroDos.value);
	alert ('la división es '+división);
}

