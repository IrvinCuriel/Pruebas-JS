
let fs = require('fs');

let archivo = fs.readFileSync('b_little_bit_of_everything', 'utf-8');
//console.log(archivo);

var separador = "\n";
var conjuntoingredientes = require('./funstringarreglo');
var informacion = conjuntoingredientes(archivo, separador);
//console.log(informacion);
var longinformacion = informacion.length;
//console.log(longinformacion);

var remover = informacion.splice(0, 1);
var remover = informacion.splice((informacion.length-1), 1);

//console.log(informacion);
//console.log(longinformacion);

//Filtrar arreglos emptys del array anterior
  var informacionfiltrada = informacion.filter(function (el) {
    return el != null;
  });
  //console.log(informacionfiltrada);
  var longfiltrada = informacionfiltrada.length;
  //console.log(longfiltrada);

var M = new Array()
for (var i = 0; i < longfiltrada; i++) {
  var pizza = informacionfiltrada[i];
  var espacio = " ";
  var ingredientes = require('./funstringarreglo');
  var nombreingredientes = ingredientes(pizza, espacio);
  var eliminarprimero = nombreingredientes.splice(0, 1);
  //Filtrar arreglos emptys del array anterior
    var listaingredientes = nombreingredientes.filter(function (el) {
      return el != null;
    });
    M[i] = listaingredientes;
}
//console.log('Arreglo de Pizas con ingredientes = arraypizzas');
//console.log(M);
//console.log('usar al final M[1] ');
//console.log(M[1]);

var arraypizzas = M;

//*********************************************************************************************
var elementodecombinacion = ['mushrooms', 'tomatoes', 'onions', 'pineapple', 'ham', 'neapolitan-crust', 'basil', 'emmental-cheese', 'mozzarella', 'cheddar'];
console.log(elementodecombinacion);
//*********************************************************************************
    //Se usa find y JSON.stringify para obtener la escalera de indices de las pizas del arreglo de combinacion maxima
    var indicespizzas = [];
    const found = arraypizzas.find( (arraypizza, index) => {
      console.log('Este es el indice unitario');
      console.log(index);
      indicespizzas.push(index);
      return JSON.stringify(arraypizza) === JSON.stringify(elementodecombinacion);
    })
    console.log('indices de las pizzas');
    console.log(indicespizzas);
//*********************************************************************************

//*********************************************************************************


    console.log('Lista de las pizzas a entregar a un Equipo de T personas');
    console.log(indicespizzas);
