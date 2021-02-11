/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	const precioBase = 35;
 	let cantidadLamparas;
 	let marcaLamparas;
 	let precioConDescuento;
 	let precioSinDescuento;
 	let descuento;
 	let ingresosBrutos;
 	
 	marcaLamparas=document.getElementById('Marca').value;
 	cantidadLamparas = document.getElementById('txtIdCantidad').value;
 	cantidadLamparas=parseInt(cantidadLamparas);
 	
 	precioSinDescuento=cantidadLamparas*precioBase;

 	// Parte 1: todo con switch

 	/*switch (cantidadLamparas) 
 	{
 		case 1:
 		case 2:
 		{
 			descuento=0;
 			break;
 		}
 		case 3: 
 		{
 			switch(marcaLamparas)
 			{
 				case "ArgentinaLuz":
 				{
 					descuento=precioSinDescuento*.15;
 					break;
 				}
 				case "FelipeLamparas":
 				{
 					descuento=precioSinDescuento*.1;
 					break;
 				}
 				default:
 				{
 					descuento=precioSinDescuento*.05;
 				}
 			}
 			break;
 		}
 		case 4: 
 		{
 			switch(marcaLamparas)
 			{
 				case "ArgentinaLuz":
 				case "FelipeLamparas":
 				{
 					descuento=precioSinDescuento*.25;
 					break;
 				}
 				default:
 				{
 					descuento=precioSinDescuento*.2;
 				}
 			}
 			break;
 		}
 		case 5:
 		{
 			switch (marcaLamparas)
 			{
 				case "ArgentinaLuz":
 				{
 					descuento=precioSinDescuento*.4;
 					break;
 				}
 				default: 
 				{
 					descuento=precioSinDescuento*.3;
 				}
 			}
 			break
 		}
 		default:
 		{
 			descuento=precioSinDescuento*.5;
 		}
 	}*/

 	// Parte 2: todo con if

 	/*if (cantidadLamparas<6 && cantidadLamparas>0) 
 	{
 		if (cantidadLamparas<3) 
 		{
 			descuento=0;
 		}
 		else if (cantidadLamparas==3) 
 		{
 			if (marcaLamparas=="ArgentinaLuz") 
 			{
 				descuento=precioSinDescuento*.15;
 			} 
 			else if (marcaLamparas=="FelipeLamparas")
 			{
 				descuento=precioSinDescuento*.1;
 			}
 			else 
 			{
 				descuento=precioSinDescuento*.05;
 			}
 		}
 		else if (cantidadLamparas==4) 
 		{
 			if (marcaLamparas=="ArgentinaLuz"||marcaLamparas=="FelipeLamparas") 
 			{
 				descuento=precioSinDescuento*.25;
 			}
 			else 
 			{
 				descuento=precioSinDescuento*.2;
 			}
 		}
 		else if (cantidadLamparas==5) 
 		{
 			if (marcaLamparas=="ArgentinaLuz") 
 			{
 				descuento=precioSinDescuento*.4;
 			}
 			else 
 			{
 				descuento=precioSinDescuento*.3;
 			}
 		}
 	}
 	else if (cantidadLamparas>5) 
 	{
 		descuento=precioSinDescuento*.5;
 	}
 	else 
 	{
 		descuento=0;
 		precioSinDescuento=0;
 		alert("No se puede comprar menos de 1 lámpara.");
 	}*/

//Parte 3: 1 if y el resto switch

 	/*if(cantidadLamparas<6)
 	{
 		switch (cantidadLamparas)
 		{
 			case 1 : 
 			case 2 : 
 			{
 				descuento=0;
 				break;
 			}
 			case 3 :
 			{
 				switch(marcaLamparas)
 				{
 					case "ArgentinaLuz" : 
 					{
 						descuento=precioSinDescuento*.15;
 						break;
 					}
 					case "FelipeLamparas" : 
 					{
 						descuento=precioSinDescuento*.1;
 						break;
 					}
 					default : 
 					{
 						descuento=precioSinDescuento*.05;
 					}
 				}
 				break;
 			}
 			case 4 : 
 			{
 				switch(marcaLamparas)
 				{
 					case "ArgentinaLuz":
 					case "FelipeLamparas":
 					{
 						descuento=precioSinDescuento*.25;
 						break;
 					}
 					default:
 					{
 						descuento=precioSinDescuento*.2;
 					}
 				}
 				break;
 			}
 			case 5 : 
 			{
 				switch(marcaLamparas)
 				{
 					case "ArgentinaLuz":
 					{
 						descuento=precioSinDescuento*.4;
 						break;
 					}
 					default: 
 					{
 						descuento=precioSinDescuento*.3;
 					}
 				}
 				break;
 			}
 			default:
 			{
 				descuento=0;
 				precioSinDescuento=0;
 				alert("La cantidad de lámparas a comprar no puede ser menor a 1.");
 			}
 		}
 	}
 	else 
 	{
 		descuento=precioSinDescuento*.5;
 	}*/

 	// Parte 4: 1 switch y el resto if

 	switch(marcaLamparas)
 	{
 		default:
 		{
 			if (cantidadLamparas>0) 
 			{
 				if (cantidadLamparas<6) 
 				{
 					if (cantidadLamparas<3) 
 					{
 						descuento=0;
 					} 
 					else if (cantidadLamparas==3) 
 					{
 						descuento=precioSinDescuento*.05;
 					}
 					else if (cantidadLamparas==4) 
 					{
 						descuento=precioSinDescuento*.2;
 					}
 					else 
 					{
 						descuento=precioSinDescuento*.3;
 					}
 				}
 				else 
 				{
 					descuento=precioSinDescuento*.5;
 				}
 			}
 			else 
 			{
 				descuento=0;
 				precioSinDescuento=0;
 				alert("La cantidad de lámparas a comprar no puede ser menor a 1.");
 			}
 			break;
 		}
 		case "ArgentinaLuz":
 		{
 			if (cantidadLamparas>0) 
 			{
 				if (cantidadLamparas<6) 
 				{
 					if (cantidadLamparas<3) 
 					{
 						descuento=0;
 					} 
 					else if (cantidadLamparas==3) 
 					{
 						descuento=precioSinDescuento*.15;
 					}
 					else if (cantidadLamparas==4) 
 					{
 						descuento=precioSinDescuento*.25;
 					}
 					else 
 					{
 						descuento=precioSinDescuento*.4;
 					}
 				}
 				else 
 				{
 					descuento=precioSinDescuento*.5;
 				}
 			}
 			else 
 			{
 				descuento=0;
 				precioSinDescuento=0;
 				alert("La cantidad de lámparas a comprar no puede ser menor a 1.");
 			}
 			break;
 		}
 		case "FelipeLamparas": 
 		{
 			if (cantidadLamparas>0) 
 			{
 				if (cantidadLamparas<6) 
 				{
 					if (cantidadLamparas<3) 
 					{
 						descuento=0;
 					} 
 					else if (cantidadLamparas==3) 
 					{
 						descuento=precioSinDescuento*.1;
 					}
 					else if (cantidadLamparas==4) 
 					{
 						descuento=precioSinDescuento*.25;
 					}
 					else 
 					{
 						descuento=precioSinDescuento*.3;
 					}
 				}
 				else 
 				{
 					descuento=precioSinDescuento*.5;
 				}
 			}
 			else 
 			{
 				descuento=0;
 				precioSinDescuento=0;
 				alert("La cantidad de lámparas a comprar no puede ser menor a 1.");
 			}
 			break;
 		}
 	}

 	precioConDescuento=precioSinDescuento - descuento;
 	
 	if (precioConDescuento>119) 
 	{
 		ingresosBrutos=precioConDescuento*.1;
 		
 		precioConDescuento=precioConDescuento+ingresosBrutos;
 		
 		ingresosBrutos=ingresosBrutos.toFixed(2);
 		
 		alert("Usted pagó $"+ingresosBrutos+" de IIBB.");
 	}

 	precioConDescuento = precioConDescuento.toFixed(2);

 	document.getElementById('txtIdprecioDescuento').value=precioConDescuento;
}