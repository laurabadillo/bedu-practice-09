console.log("Hola mundo");

if(true){
  console.log("Es verdadero");
} else {

}


var hora = 23; 
var saludos = ":) ";
if (hora < 10) {
  saludos += "Buenos dias";
} else if (hora < 20) {
  saludos += "Buenas tardes";
} 
else {
    saludos += "Buenas noches";
}
console.log(saludos) + " :("; 



//Switch 
var fruta = "Jicama";
var resultado;

switch(fruta){
  case "Piña":
    resultado = "Soy una " + fruta;
    break;
  case "Melon":
    resultado = "Soy una " + fruta;
    break;
  case "Manzana":
    resultado = "Soy una " + fruta;
    break;
  default: 
    resultado = "La " + fruta + " no esta en la lista";
    break;
}
console.log(resultado);

// //Ciclos 
// var tamanio = 8;
// for (var paso = 0; paso < tamanio; paso++){
//   console.log("Dando " + paso + " pasos de " + tamanio);
// }
// console.log("");
// for (var paso = tamanio; paso > 0; paso--){
//   console.log("Dando " + paso + " pasos de " + tamanio);
// }

// //Arrays 
// var coches = ["BMW", "Volvo", "Honda", "Fiat", "Audi"];
//   for(var i = 0; i < coches.length; i++){
//     console.log(coches[i]);
//   }

// console.log("");

// for(var i = coches.length-1; i >= 0; i--){
//   console.log(i);
//   console.log(coches[i]);
// }

//PUSH - insert 
var coches = ["BMW", "Volvo", "Honda", "Fiat", "Audi"];
  for(var i = 0; i < coches.length; i++){
    console.log(coches[i]);
  }

console.log("");

//Agregar al final 
coches.push("Nissan", "Mazda");
//Eliminar el ultimo
coches.pop();
//Eliminar el primero 
coches.shift();
//Agregar al inicio 
coches.unshift("VW");
//Invertir elementos 
coches.reverse();
//Ordenar 
coches.sort();
//Imprimir desde hasta 
console.log(coches);
console.log(coches.slice(0, 3));
//Eliminar desde hasta 
//coches.splice(0, 2);
console.log(coches);

//WHILE 
var coche = "Honda";
var contador = 0;
  while(coche != coches[contador]){
    console.log(coches[contador]);
    contador++;

  }
//Aleatorio
  console.log(""); 
  var indice = aleatorios(0, coches.length);
  console.log(coches[indice]);


  function aleatorios(min, max) {
    return Math.floor((Math.random()) * (max - min)) + min;
  }


//Ciclos 
var tamanio = 8;
for (var paso = 0; paso < tamanio; paso++){
  console.log("Dando " + paso + " pasos de " + tamanio);
}
console.log("");
for (var paso = tamanio; paso > 0; paso--){
  console.log("Dando " + paso + " pasos de " + tamanio);
} 

  //Piramide 
  console.log("");
  var size = 20; 
  for (var a = 0; a < size; a++){
       console.log(a);
      }

  console.log("");
    var size = 20;
    for (var i = 0; i < size; i++){
         var text = ""; 
         for (var j = 0; j < i; j++){
           text += "*";
         }
         console.log(text);
    }
    for (var i = size; i > 0; i--){
         var text = ""; 
         for (var j = size; j > i; j--){
           text = "*";
         }
         console.log(text);
    }