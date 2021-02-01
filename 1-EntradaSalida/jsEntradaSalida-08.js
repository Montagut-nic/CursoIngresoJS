/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let resto;
	resto=parseInt(txtIdNumeroDividendo.value)%parseInt(txtIdNumeroDivisor.value);
	alert("El resto es "+resto);
}
