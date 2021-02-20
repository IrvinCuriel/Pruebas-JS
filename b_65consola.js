
//Filtrar arreglos emptys del array anterior
  var informacionfiltrada = ['5 mushrooms onions neapolitan-crust emmental-cheese cheddar',
  '8 mushrooms tomatoes onions pineapple neapolitan-crust emmental-cheese mozzarella cheddar',
  '1 basil',
  '3 tomatoes emmental-cheese mozzarella',
  '1 pineapple',
  '4 onions neapolitan-crust emmental-cheese mozzarella',
  '3 mushrooms basil mozzarella',
  '7 mushrooms onions pineapple ham neapolitan-crust mozzarella cheddar',
  '3 pineapple ham neapolitan-crust',
  '1 ham',
  '3 tomatoes basil mozzarella',
  '6 mushrooms tomatoes ham neapolitan-crust mozzarella cheddar',
  '9 mushrooms tomatoes onions ham basil neapolitan-crust emmental-cheese mozzarella cheddar',
  '3 mushrooms tomatoes mozzarella',
  '8 mushrooms onions pineapple neapolitan-crust ham basil emmental-cheese cheddar',
  '4 mushrooms emmental-cheese mozzarella cheddar',
  '2 basil cheddar',
  '7 tomatoes pineapple neapolitan-crust basil emmental-cheese mozzarella cheddar',
  '3 ham neapolitan-crust mozzarella',
  '4 onions ham basil cheddar',
  '4 pineapple ham emmental-cheese mozzarella',
  '8 mushrooms tomatoes onions pineapple basil neapolitan-crust mozzarella cheddar',
  '2 ham neapolitan-crust',
  '3 neapolitan-crust emmental-cheese cheddar',
  '3 mushrooms basil neapolitan-crust',
  '2 pineapple mozzarella',
  '2 mushrooms tomatoes',
  '2 emmental-cheese mozzarella',
  '10 mushrooms tomatoes onions pineapple basil ham neapolitan-crust emmental-cheese mozzarella cheddar',
  '2 mushrooms ham',
  '1 mozzarella',
  '3 onions basil cheddar',
  '2 onions cheddar',
  '9 mushrooms tomatoes onions pineapple neapolitan-crust basil emmental-cheese mozzarella cheddar',
  '4 mushrooms tomatoes basil emmental-cheese',
  '10 mushrooms tomatoes onions pineapple ham basil neapolitan-crust emmental-cheese mozzarella cheddar',
  '2 onions neapolitan-crust',
  '1 emmental-cheese',
  '5 mushrooms tomatoes onions basil cheddar',
  '1 onions',
  '2 mushrooms emmental-cheese',
  '2 onions mozzarella',
  '1 ham',
  '1 ham',
  '2 mushrooms onions',
  '2 tomatoes cheddar',
  '2 pineapple neapolitan-crust',
  '9 mushrooms tomatoes onions neapolitan-crust basil ham emmental-cheese mozzarella cheddar',
  '5 mushrooms pineapple ham basil emmental-cheese',
  '1 mozzarella',
  '2 tomatoes cheddar',
  '1 basil',
  '5 mushrooms onions ham neapolitan-crust mozzarella',
  '1 ham',
  '2 onions neapolitan-crust',
  '3 mushrooms basil emmental-cheese',
  '2 mozzarella cheddar',
  '1 emmental-cheese',
  '1 ham',
  '2 emmental-cheese mozzarella',
  '4 mushrooms tomatoes basil emmental-cheese',
  '4 mushrooms basil emmental-cheese cheddar',
  '1 cheddar',
  '1 basil',
  '6 tomatoes onions pineapple basil mozzarella cheddar',
  '3 neapolitan-crust emmental-cheese cheddar',
  '2 neapolitan-crust emmental-cheese',
  '1 cheddar',
  '1 basil',
  '2 mozzarella cheddar',
  '2 tomatoes ham',
  '3 onions neapolitan-crust mozzarella',
  '6 mushrooms tomatoes basil ham emmental-cheese cheddar',
  '6 tomatoes ham neapolitan-crust emmental-cheese mozzarella cheddar',
  '1 mushrooms',
  '1 ham',
  '2 mushrooms emmental-cheese',
  '1 pineapple',
  '2 mushrooms onions',
  '2 onions mozzarella',
  '2 pineapple cheddar',
  '2 emmental-cheese cheddar',
  '1 ham',
  '1 basil',
  '1 basil',
  '1 onions',
  '7 mushrooms tomatoes onions pineapple neapolitan-crust basil ham',
  '1 emmental-cheese',
  '1 cheddar',
  '3 mushrooms neapolitan-crust ham',
  '3 basil mozzarella cheddar',
  '3 mushrooms tomatoes emmental-cheese',
  '2 mushrooms neapolitan-crust',
  '10 mushrooms tomatoes onions pineapple neapolitan-crust basil ham emmental-cheese mozzarella cheddar',
  '1 tomatoes',
  '2 tomatoes onions',
  '1 basil',
  '10 mushrooms tomatoes onions pineapple neapolitan-crust ham basil emmental-cheese mozzarella cheddar',
  '1 cheddar',
  '3 onions neapolitan-crust basil',
  '2 ham cheddar',
  '2 tomatoes neapolitan-crust',
  '1 neapolitan-crust',
  '1 tomatoes',
  '2 pineapple neapolitan-crust',
  '3 neapolitan-crust basil emmental-cheese',
  '2 onions basil',
  '2 basil emmental-cheese',
  '5 mushrooms tomatoes basil neapolitan-crust emmental-cheese',
  '2 basil emmental-cheese',
  '1 tomatoes',
  '5 mushrooms pineapple basil ham cheddar',
  '2 ham basil',
  '5 mushrooms tomatoes pineapple basil ham',
  '2 tomatoes pineapple',
  '2 onions mozzarella',
  '2 pineapple mozzarella',
  '3 onions emmental-cheese cheddar',
  '1 pineapple',
  '2 ham cheddar',
  '6 pineapple ham neapolitan-crust basil mozzarella cheddar',
  '3 pineapple basil ham',
  '1 ham',
  '3 onions pineapple basil',
  '2 onions emmental-cheese',
  '1 cheddar',
  '1 onions',
  '1 ham',
  '2 pineapple basil',
  '2 neapolitan-crust emmental-cheese',
  '1 pineapple',
  '1 pineapple',
  '2 ham cheddar',
  '1 mozzarella',
  '1 neapolitan-crust',
  '1 pineapple',
  '2 onions pineapple',
  '1 cheddar',
  '2 pineapple basil',
  '3 mushrooms onions emmental-cheese',
  '1 neapolitan-crust',
  '6 onions pineapple basil neapolitan-crust emmental-cheese mozzarella',
  '1 mushrooms',
  '1 emmental-cheese',
  '2 mushrooms basil',
  '1 mozzarella',
  '1 tomatoes',
  '4 ham neapolitan-crust basil cheddar',
  '2 tomatoes pineapple',
  '3 tomatoes onions ham',
  '1 basil',
  '2 tomatoes ham',
  '2 ham mozzarella',
  '2 mushrooms cheddar',
  '7 mushrooms tomatoes onions pineapple neapolitan-crust emmental-cheese mozzarella',
  '5 pineapple basil neapolitan-crust emmental-cheese mozzarella',
  '6 tomatoes onions neapolitan-crust emmental-cheese mozzarella cheddar',
  '1 neapolitan-crust',
  '6 tomatoes onions neapolitan-crust ham emmental-cheese cheddar',
  '3 pineapple mozzarella cheddar',
  '2 ham emmental-cheese',
  '1 pineapple',
  '3 mushrooms tomatoes neapolitan-crust',
  '3 pineapple ham neapolitan-crust',
  '2 onions emmental-cheese',
  '9 mushrooms tomatoes onions pineapple neapolitan-crust basil emmental-cheese mozzarella cheddar',
  '5 mushrooms tomatoes onions ham cheddar',
  '1 neapolitan-crust',
  '1 emmental-cheese',
  '1 onions',
  '6 mushrooms tomatoes basil neapolitan-crust mozzarella cheddar',
  '1 basil',
  '2 neapolitan-crust cheddar',
  '1 mushrooms',
  '2 ham mozzarella',
  '4 tomatoes onions neapolitan-crust emmental-cheese',
  '1 neapolitan-crust',
  '3 onions pineapple ham',
  '1 emmental-cheese',
  '1 mozzarella',
  '3 tomatoes pineapple ham',
  '4 tomatoes ham neapolitan-crust emmental-cheese',
  '6 mushrooms tomatoes onions pineapple emmental-cheese mozzarella',
  '1 pineapple',
  '1 emmental-cheese',
  '2 onions cheddar',
  '2 onions neapolitan-crust',
  '4 mushrooms basil emmental-cheese mozzarella',
  '3 neapolitan-crust basil mozzarella',
  '7 tomatoes onions pineapple basil ham mozzarella cheddar',
  '10 mushrooms tomatoes onions pineapple ham neapolitan-crust basil emmental-cheese mozzarella cheddar',
  '1 basil',
  '3 mushrooms onions basil',
  '4 tomatoes pineapple neapolitan-crust mozzarella',
  '1 basil',
  '2 neapolitan-crust basil',
  '10 mushrooms tomatoes onions pineapple basil ham neapolitan-crust emmental-cheese mozzarella cheddar',
  '10 mushrooms tomatoes onions pineapple ham neapolitan-crust basil emmental-cheese mozzarella cheddar',
  '2 onions ham',
  '4 tomatoes basil emmental-cheese cheddar',
  '2 basil mozzarella',
  '3 tomatoes neapolitan-crust ham',
  '1 mushrooms',
  '3 mushrooms pineapple neapolitan-crust',
  '2 emmental-cheese cheddar',
  '1 basil',
  '1 cheddar',
  '2 basil mozzarella',
  '4 mushrooms pineapple basil emmental-cheese',
  '1 cheddar',
  '5 pineapple basil emmental-cheese mozzarella cheddar',
  '1 cheddar',
  '7 mushrooms tomatoes ham neapolitan-crust basil mozzarella cheddar',
  '6 mushrooms pineapple basil ham neapolitan-crust mozzarella',
  '3 tomatoes onions neapolitan-crust',
  '1 neapolitan-crust',
  '1 mozzarella',
  '2 onions neapolitan-crust',
  '3 onions pineapple mozzarella',
  '4 mushrooms tomatoes onions emmental-cheese',
  '1 mozzarella',
  '5 tomatoes pineapple basil emmental-cheese cheddar',
  '1 ham',
  '1 ham',
  '1 tomatoes',
  '3 mushrooms onions ham',
  '2 mushrooms basil',
  '1 ham',
  '1 pineapple',
  '1 tomatoes',
  '3 mushrooms onions basil',
  '4 mushrooms pineapple basil ham',
  '1 pineapple',
  '2 tomatoes ham',
  '5 tomatoes pineapple neapolitan-crust emmental-cheese cheddar',
  '3 tomatoes emmental-cheese cheddar',
  '4 tomatoes ham mozzarella cheddar',
  '2 onions basil',
  '1 onions',
  '1 mozzarella',
  '4 tomatoes onions pineapple neapolitan-crust',
  '1 mushrooms',
  '3 tomatoes neapolitan-crust emmental-cheese',
  '1 mozzarella',
  '2 mushrooms ham',
  '2 pineapple basil',
  '1 basil',
  '2 emmental-cheese cheddar',
  '1 ham',
  '4 mushrooms pineapple basil emmental-cheese',
  '1 tomatoes',
  '2 emmental-cheese mozzarella',
  '10 mushrooms tomatoes onions pineapple neapolitan-crust ham basil emmental-cheese mozzarella cheddar',
  '1 emmental-cheese',
  '2 mushrooms tomatoes',
  '1 basil',
  '8 mushrooms tomatoes pineapple ham neapolitan-crust basil emmental-cheese mozzarella',
  '1 onions',
  '4 mushrooms ham basil neapolitan-crust',
  '2 mozzarella cheddar',
  '1 neapolitan-crust',
  '5 mushrooms tomatoes pineapple neapolitan-crust ham',
  '1 onions',
  '3 mushrooms neapolitan-crust cheddar',
  '5 onions pineapple basil ham mozzarella',
  '1 mushrooms',
  '6 mushrooms onions pineapple ham mozzarella cheddar',
  '2 tomatoes basil',
  '3 mushrooms neapolitan-crust mozzarella',
  '2 neapolitan-crust emmental-cheese',
  '1 pineapple',
  '4 mushrooms tomatoes ham mozzarella',
  '1 tomatoes',
  '4 tomatoes pineapple emmental-cheese cheddar',
  '2 pineapple cheddar',
  '1 pineapple',
  '3 pineapple ham neapolitan-crust',
  '4 mushrooms pineapple neapolitan-crust ham',
  '3 onions neapolitan-crust basil',
  '8 mushrooms tomatoes pineapple ham basil emmental-cheese mozzarella cheddar',
  '2 mushrooms onions',
  '1 pineapple',
  '2 pineapple cheddar',
  '3 mushrooms tomatoes emmental-cheese',
  '2 basil mozzarella',
  '2 mushrooms onions',
  '10 mushrooms tomatoes onions pineapple ham neapolitan-crust basil emmental-cheese mozzarella cheddar',
  '1 basil',
  '4 mushrooms ham emmental-cheese mozzarella',
  '2 mozzarella cheddar',
  '1 mozzarella',
  '1 cheddar',
  '4 mushrooms tomatoes ham cheddar',
  '1 emmental-cheese',
  '3 pineapple neapolitan-crust emmental-cheese',
  '2 mushrooms mozzarella',
  '1 cheddar',
  '1 mushrooms',
  '5 mushrooms pineapple neapolitan-crust ham mozzarella',
  '8 mushrooms tomatoes onions pineapple neapolitan-crust ham basil emmental-cheese',
  '9 mushrooms onions pineapple ham neapolitan-crust basil emmental-cheese mozzarella cheddar',
  '6 mushrooms tomatoes pineapple neapolitan-crust basil emmental-cheese',
  '3 mushrooms mozzarella cheddar',
  '1 emmental-cheese',
  '2 tomatoes emmental-cheese',
  '1 mushrooms',
  '8 mushrooms tomatoes onions pineapple neapolitan-crust ham basil emmental-cheese',
  '2 tomatoes onions',
  '1 cheddar',
  '1 mushrooms',
  '5 mushrooms tomatoes basil neapolitan-crust mozzarella',
  '4 mushrooms tomatoes basil neapolitan-crust',
  '1 mushrooms',
  '1 pineapple',
  '1 onions',
  '8 tomatoes onions pineapple neapolitan-crust ham emmental-cheese mozzarella cheddar',
  '1 pineapple',
  '1 emmental-cheese',
  '1 emmental-cheese',
  '6 mushrooms onions basil neapolitan-crust emmental-cheese mozzarella',
  '4 onions ham basil cheddar',
  '1 mozzarella',
  '8 tomatoes onions basil ham neapolitan-crust emmental-cheese mozzarella cheddar',
  '1 onions',
  '4 pineapple ham neapolitan-crust mozzarella',
  '2 ham cheddar',
  '9 mushrooms tomatoes onions pineapple ham basil neapolitan-crust emmental-cheese mozzarella',
  '1 tomatoes',
  '3 mushrooms ham mozzarella',
  '5 tomatoes pineapple ham mozzarella cheddar',
  '8 tomatoes onions pineapple basil neapolitan-crust ham emmental-cheese cheddar',
  '1 neapolitan-crust',
  '2 mushrooms neapolitan-crust',
  '10 mushrooms tomatoes onions pineapple basil ham neapolitan-crust emmental-cheese mozzarella cheddar',
  '7 mushrooms onions pineapple ham basil emmental-cheese cheddar',
  '1 onions',
  '3 mushrooms neapolitan-crust mozzarella',
  '6 onions neapolitan-crust ham basil emmental-cheese mozzarella',
  '1 emmental-cheese',
  '2 onions basil',
  '1 pineapple',
  '2 basil neapolitan-crust',
  '1 mushrooms',
  '1 onions',
  '1 emmental-cheese',
  '3 pineapple basil cheddar',
  '1 emmental-cheese',
  '2 pineapple neapolitan-crust',
  '3 mushrooms pineapple basil',
  '1 mozzarella',
  '5 mushrooms tomatoes pineapple mozzarella cheddar',
  '3 mushrooms tomatoes ham',
  '7 mushrooms tomatoes onions basil neapolitan-crust mozzarella cheddar',
  '3 emmental-cheese mozzarella cheddar',
  '1 emmental-cheese',
  '1 pineapple',
  '4 mushrooms onions basil cheddar',
  '1 basil',
  '7 onions pineapple neapolitan-crust ham emmental-cheese mozzarella cheddar',
  '2 tomatoes mozzarella',
  '4 onions basil ham neapolitan-crust',
  '2 tomatoes cheddar',
  '3 pineapple neapolitan-crust mozzarella',
  '2 mushrooms cheddar',
  '3 pineapple ham neapolitan-crust',
  '2 tomatoes mozzarella',
  '1 ham',
  '4 mushrooms pineapple basil cheddar',
  '1 neapolitan-crust',
  '10 mushrooms tomatoes onions pineapple ham basil neapolitan-crust emmental-cheese mozzarella cheddar',
  '1 basil',
  '5 mushrooms ham neapolitan-crust emmental-cheese cheddar',
  '2 basil neapolitan-crust',
  '2 mushrooms emmental-cheese',
  '1 onions',
  '3 mushrooms tomatoes neapolitan-crust',
  '5 tomatoes onions ham basil neapolitan-crust',
  '2 tomatoes mozzarella',
  '2 mushrooms basil',
  '2 tomatoes ham',
  '1 tomatoes',
  '1 mushrooms',
  '1 mushrooms',
  '1 pineapple',
  '3 tomatoes neapolitan-crust ham',
  '4 tomatoes pineapple basil cheddar',
  '1 cheddar',
  '4 pineapple ham neapolitan-crust emmental-cheese',
  '3 mushrooms onions basil',
  '1 emmental-cheese',
  '2 tomatoes mozzarella',
  '3 onions ham neapolitan-crust',
  '3 mushrooms ham mozzarella',
  '1 cheddar',
  '3 onions emmental-cheese cheddar',
  '2 onions ham',
  '4 tomatoes emmental-cheese mozzarella cheddar',
  '3 pineapple neapolitan-crust emmental-cheese',
  '1 mozzarella',
  '3 neapolitan-crust basil ham',
  '3 neapolitan-crust emmental-cheese cheddar',
  '2 emmental-cheese mozzarella',
  '1 tomatoes',
  '3 basil neapolitan-crust mozzarella',
  '1 cheddar',
  '4 onions basil emmental-cheese cheddar',
  '1 ham',
  '3 mushrooms tomatoes pineapple',
  '1 neapolitan-crust',
  '4 tomatoes ham basil cheddar',
  '6 tomatoes onions basil neapolitan-crust emmental-cheese cheddar',
  '2 onions neapolitan-crust',
  '3 onions pineapple ham',
  '1 mozzarella',
  '7 onions pineapple neapolitan-crust ham emmental-cheese mozzarella cheddar',
  '1 neapolitan-crust',
  '1 emmental-cheese',
  '1 neapolitan-crust',
  '1 pineapple',
  '4 tomatoes basil ham neapolitan-crust',
  '10 mushrooms tomatoes onions pineapple neapolitan-crust basil ham emmental-cheese mozzarella cheddar',
  '8 mushrooms tomatoes onions ham basil emmental-cheese mozzarella cheddar',
  '3 tomatoes ham mozzarella',
  '10 mushrooms tomatoes onions pineapple ham neapolitan-crust basil emmental-cheese mozzarella cheddar',
  '3 onions ham basil',
  '2 mushrooms tomatoes',
  '1 mushrooms',
  '3 tomatoes ham neapolitan-crust',
  '1 pineapple',
  '3 onions pineapple ham',
  '4 mushrooms ham mozzarella cheddar',
  '3 onions ham neapolitan-crust',
  '2 tomatoes neapolitan-crust',
  '4 pineapple neapolitan-crust ham cheddar',
  '5 tomatoes ham basil emmental-cheese mozzarella',
  '1 ham',
  '1 tomatoes',
  '3 onions neapolitan-crust emmental-cheese',
  '3 onions neapolitan-crust ham',
  '4 mushrooms tomatoes onions neapolitan-crust',
  '1 mozzarella',
  '10 mushrooms tomatoes onions pineapple ham basil neapolitan-crust emmental-cheese mozzarella cheddar',
  '3 tomatoes onions ham',
  '6 mushrooms ham basil emmental-cheese mozzarella cheddar',
  '3 tomatoes onions ham',
  '4 basil emmental-cheese mozzarella cheddar',
  '2 mushrooms tomatoes',
  '3 tomatoes neapolitan-crust ham',
  '5 mushrooms tomatoes ham basil emmental-cheese',
  '3 onions basil cheddar',
  '2 tomatoes basil',
  '5 mushrooms tomatoes pineapple mozzarella cheddar',
  '5 mushrooms pineapple emmental-cheese mozzarella cheddar',
  '2 mushrooms emmental-cheese',
  '8 mushrooms tomatoes onions neapolitan-crust basil ham mozzarella cheddar',
  '4 tomatoes pineapple basil emmental-cheese',
  '1 ham',
  '1 neapolitan-crust',
  '1 mushrooms',
  '3 tomatoes ham mozzarella',
  '2 mushrooms onions',
  '2 tomatoes cheddar',
  '6 tomatoes pineapple basil neapolitan-crust emmental-cheese cheddar',
  '5 tomatoes onions pineapple emmental-cheese cheddar',
  '1 tomatoes',
  '1 onions',
  '1 mozzarella',
  '3 mushrooms tomatoes emmental-cheese',
  '2 pineapple emmental-cheese',
  '1 pineapple',
  '1 onions',
  '1 emmental-cheese',
  '3 onions ham mozzarella',
  '4 tomatoes onions neapolitan-crust basil',
  '3 tomatoes pineapple emmental-cheese',
  '5 mushrooms tomatoes basil ham cheddar',
  '1 pineapple',
  '1 mushrooms',
  '1 cheddar',
  '1 tomatoes',
  '1 tomatoes',
  '1 mushrooms',
  '9 mushrooms tomatoes onions pineapple basil neapolitan-crust ham mozzarella cheddar',
  '1 ham',
  '6 mushrooms tomatoes pineapple ham basil mozzarella',
  '1 neapolitan-crust',
  '5 tomatoes onions neapolitan-crust emmental-cheese mozzarella',
  '1 cheddar',
  '1 basil',
  '1 ham',
  '2 pineapple ham',
  '1 cheddar',
  '7 onions pineapple basil ham emmental-cheese mozzarella cheddar',
  '1 mushrooms',
  '2 tomatoes basil',
  '6 mushrooms pineapple ham basil mozzarella cheddar',
  '1 onions',
  '3 ham basil emmental-cheese',
  '4 mushrooms emmental-cheese mozzarella cheddar',
  '4 tomatoes pineapple neapolitan-crust basil'];


  //console.log(informacionfiltrada);
  var longfiltrada = informacionfiltrada.length;
  //console.log(longfiltrada);

  function ingredientes(cadenaADividir,separador) {
    var nuevoarreglo = [];
     var arrayDeCadenas = cadenaADividir.split(separador);
     for (var i=0; i < arrayDeCadenas.length; i++) {
        nuevoarreglo.push(arrayDeCadenas[i]);
     }
     return nuevoarreglo;
  }

var M = new Array()
for (var i = 0; i < longfiltrada; i++) {
  var pizza = informacionfiltrada[i];
  var espacio = " ";
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

//Combinaciones

  //potencia de un conjunto P(A)
  function obtenerConjuntoPotencia(datos) {
    if (!Array.isArray(datos)) {
      throw TypeError('El argumento datos deebe ser un arreglo');
    }
    return datos.reduce((a, v) => a.concat(a.map(d => [v].concat(d))), [[]]);
  };

  try {
    var combinaciones0 = obtenerConjuntoPotencia(arraypizzas);
    //console.log('Obtencion de todas las combinaciones 5C1, 5C2, 5C3 ,5C4 ,5C5');
    //console.log(combinaciones0); // Se obtienen todas las combinaciones de 5C1, 5C2, 5C3 ,5C4 ,5C5
  } catch (e) {
    console.log(`Error: ${e.message}`);
  };

  //Obtener conjunto con solo conbinaciones 5C2 de combinaciones0
  var longcombinaciones0 = combinaciones0.length;
  //let cincoCdos = [];
  var cincoCdos = new Array();
  for (var i=0; i < longcombinaciones0; i++) {
    if (combinaciones0[i].length == 2) { //IMPORTANTE PARA DEFINIR LA LONGITUD DE LAS CONBINACIONES r EN nCr DONDE r es numerode elementos en combinacion
      //cincoCdos.push ({
      //  com: combinaciones0[i],
      //});
      cincoCdos[i] = combinaciones0[i];
    }
    //console.log(cincoCdos); //nota: ¿?¿?
  }
  //console.log('Arreglo con combinaciones 5Cr del Arreglo arraypizzas CON EMPTY ITEMS');
  //console.log(cincoCdos); //Se muestra combinaciones 5Cr del Arreglo arraypizzas CON EMPTY ITEMS

  //Filtrar arreglos emptys del array anterior
  var cincoCdosfiltered = cincoCdos.filter(function (el) {
    return el != null;
  });
  //console.log('Arreglo con combinaciones 5Cr del Arreglo cincoCdos Filtrado');
  //console.log(cincoCdosfiltered);
  var longcincoCdos = cincoCdosfiltered.length
  console.log('Numero de combinaciones Posibles nCr');
  console.log(longcincoCdos);

  // Se realiza un For  y dentro un segundo for para concatenar y obtener un conjunto de elementos concatenados
  var longcincoCdos = cincoCdosfiltered.length
  var sub = [];
  for (var i = 0; i < longcincoCdos; i++) {
    var terna = cincoCdosfiltered[i];
    var longterna = terna.length;
    var primeramatriz = [];
    var ultimoelemento = cincoCdosfiltered[i][terna.length - 1];
     for (var s = 0; s < longterna; s++) {
       //var nnn = primermatriz.concat(terna[s]);
       //console.log('Aqui...');
       //console.log(nnn);
       primeramatriz.push(terna[s]);
     }
     //console.log('Nota...2 separacion de cada elemento del conjunto TOTAL de combinaciones nCr');
     //console.log(primeramatriz);

    var longprimeramatriz = primeramatriz.length;
    //console.log('longitud de cada elemento nCr obtenido de Nota...2');
    //console.log(longprimeramatriz);
    var segundamatriz = [];
            var terceramatriz = [];
    for (var j = 0; j < longprimeramatriz; j++) {
        var tercera = primeramatriz[j];
        var longtercera = tercera.length;
        for (var k = 0; k < longtercera; k++) {
          terceramatriz.push(tercera[k]);
        }
    }
    //console.log('Nota...3 Union con push de todos los valores de cada elemento de nCr ... union de Nota...2 en un solo array');
    //console.log(terceramatriz);
    sub.push(terceramatriz);
  }

  //eliminar los arreglos con valores repetidos
        // buscar elementos con indices repetidos
        var longsub = sub.length;
        var subnorepetidos = [];
        for (var i = 0; i < longsub; i++) {
          var segundoarreglo = sub[i];
          var longsegundoarreglo = segundoarreglo.length;

          const nuevoArr = Array.from(new Set(segundoarreglo))

              subnorepetidos.push(nuevoArr);

        }
        //console.log("Array Total que representa nCr con union de subconjuntos con valores NO REPETIDOS");
        //console.log(subnorepetidos);

    // Sumar cantidad de elementos(Ingredientes en cada arreglo del arreglo de combinaciones)
    var longsubnorepetidos = subnorepetidos.length;
    var sumaingredientes = [];
    for (var i = 0; i < longsubnorepetidos; i++) {
      var arreglosecundario = subnorepetidos[i].length;
      sumaingredientes.push(arreglosecundario);
    }
    //console.log('Se obtiene un arreglo con la suma de la cantidad de ingredientes en cada combinación');
    //console.log(sumaingredientes);
    //obtener el maximo del conjunto
    var max = Math.max(...sumaingredientes);
    console.log('Se obtiene la suma maxima de ingredientes');
    console.log(max);
      //obtner el key del objeto de la sumalibros
      var indicemax = [];
      var ind = sumaingredientes.indexOf(max);
      while (ind != -1) {
      indicemax.push(ind);
      ind = sumaingredientes.indexOf(max, ind + 1);
      }
      //console.log('Se Obtiene el o los del arreglo que pertenece al valor máximo');
      //console.log(indicemax);
      // una vez obtenido el key regresar al conjunto cincoCdosfiltered para obtener el arreglo del arreglo con mejor puntaje sub
      var conjuntoPizzasmax = cincoCdosfiltered[indicemax[0]]; // se coloca el subindice [0] ya que puede haber mas de dos valores iguales maximos y para seleccionar solo uno de ellos
      //console.log('Se Obtiene la combinacion que genera maximos Ingredientes del primer indice max ess decir[0]');
      //console.log(conjuntoPizzasmax);

//*********************************************************************************
    var longconjuntoPizzasmax = conjuntoPizzasmax.length;
    var pizzas = [];
    for (var i = 0; i < longconjuntoPizzasmax; i++) {
    var elementodecombinacion = conjuntoPizzasmax[i];
//*********************************************************************************
    //Se usa find y JSON.stringify para obtener la escalera de indices de las pizas del arreglo de combinacion maxima
    var indicespizzas = [];
    const found = arraypizzas.find( (arraypizza, index) => {
      //console.log(index);
      indicespizzas.push(index);
      return JSON.stringify(arraypizza) === JSON.stringify(elementodecombinacion);
    })
    //console.log('indices de las pizzas');
    //console.log(indicespizzas);
//*********************************************************************************
    //Obtener el ultimo elemento que es el indice para agregarlo al  array pizzas que seran las pizzas a pedir
    var ultimonumero = indicespizzas[indicespizzas.length-1];
    pizzas.push(ultimonumero);

//*********************************************************************************

    }
    console.log('Lista de las pizzas a entregar a un Equipo de T personas');
    console.log(pizzas);
