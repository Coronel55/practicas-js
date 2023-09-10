console.log("Bienvenido al Casino LOYOLA!!!");
console.log("-------------RULETA-------------");
console.log("    -----------------------");
console.log("        --------------");
console.log("           -------");
var numj = 0;
var numr= 0;
var numrul= 0;
var min=37*5;
var max=37*10;
//var opcion='Y';
//opcion = prompt('Desea jugar? Y/N','');
//while ((opcion=="Y") || (opcion=="y")){
    while (numj<10){
    numj=numj+1;
    numr=Math.floor(Math.random() * (max - min) + min);
    console.log("Nro de Juego: "+numj);
    console.log("Valor Aleatorio Generado: "+numr);
    numrul=numr%37;
    console.log("Nro que cayó en la ruleta:: "+numrul);
    console.log("");

}
//}
console.log("Gracias por utilizar!");