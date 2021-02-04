/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let resto;
	let num1;
	let num2;
	num1=parseInt(document.getElementById('txtIdNumeroDividendo').value);
	num2=parseInt(document.getElementById('txtIdNumeroDivisor').value);
	resto=num1%num2;
	alert("El resto es "+resto);
}
