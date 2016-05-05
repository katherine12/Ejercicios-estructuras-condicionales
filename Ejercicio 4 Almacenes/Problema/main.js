var costo = parseInt(prompt("Ingresa el costo "));
if (costo>=2500){
	descuento=((costo*15)/100);
	precio=costo-descuento;
	alert("te voy a aplicar el 15% de descuento , entonces el precio total es:"+precio);

}else{
	descuento=((costo*8)/100);
    precio = costo-descuento;
    alert ("te voy a aplicar el 8% de descuento ,entonces tu precio total es : "+precio);
}