function mostrar()
{
	let nota;
	let maximo = 10;
	let minimo = 1;
	
	nota=Math.round((Math.random() * (maximo - minimo)) + minimo);//Genero el número RANDOM entre 1 y 10 
	
	if (nota<4) 
	{
		alert("Vamos, la próxima se puede.");
		alert(nota);
	}
	else {
		if (nota<9) 
		{
			alert("APROBÓ");
			alert(nota);
		}
		else {
			alert("EXCELENTE");
			alert(nota);
		}
	}
}//FIN DE LA FUNCIÓN