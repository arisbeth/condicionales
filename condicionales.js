//Completar las condiciones de los if del siguiente script
//para que los mensajes de los alert() se muestren siempre de forma correcta:

var numero1 = 5;
var numero2 = 8;

if( numero1 < numero2 ) {
	alert("numero1 no es mayor que numero2");
}

if( numero2 - (numero1 * 2) ) {
	alert("numero2 no es positivo");
}

if( numero1 - (numero2) ) {
	alert("numero1 es negativo o distinto de cero");
}

if( numero1 ++ ) {
	alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}