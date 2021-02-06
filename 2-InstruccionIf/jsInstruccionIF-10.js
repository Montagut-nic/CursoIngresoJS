function mostrar()
{
	let nota;
	
	nota=Math.floor((Math.random() * 10) + 1);//Genero el número RANDOM entre 1 y 10 
	
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