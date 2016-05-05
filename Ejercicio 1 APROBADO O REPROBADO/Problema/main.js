var notas = parseInt(prompt("Ingresa la primera nota"));
var nota1 = parseInt(prompt("Ingresa la segunda nota"));
var nota2 = parseInt(prompt("Ingresa la tercera nota"));

promedio = ((notas + nota1 + nota2)/3);

if(promedio>=5){
	alert("APROBADO");
} else {
	alert("DESAPROBADO");
}