//*********************************************************************************************
//*********************************IMPORTADO DESDE MINIMIZAR************************************************************

let fs = require('fs');

let archivo = fs.readFileSync('c_many_ingredients', 'utf-8');
//console.log(archivo);

var separador = "\n";
var conjuntoingredientes = require('./funstringarreglo');
var informacion = conjuntoingredientes(archivo, separador);
//console.log('matriz obtenida del archivo plano');
//console.log(informacion);
var longinformacion = informacion.length;
//console.log('longitud de la matriz');
//console.log(longinformacion);

var remover = informacion.splice(0, 1);
var remover = informacion.splice((informacion.length-1), 1);

//console.log('informacion sin la primera y ultima linea');
//console.log(informacion);
//console.log('longitud sin a primera y ultima linea');
//console.log(longinformacion);

//Filtrar arreglos emptys del array anterior
  var informacionfiltrada = informacion.filter(function (el) {
    return el != null;
  });
  //console.log('matriz FILTRADA');
  //console.log(informacionfiltrada);
  var longfiltrada = informacionfiltrada.length;
  //console.log('longitud de la matriz FILTRADA');
  //console.log(longfiltrada);

  var Mv = new Array()
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
      Mv[i] = listaingredientes;
  }
  console.log('Arreglo de Pizas con ingredientes = arraypizzas');
  console.log(Mv);
  var arreglo = Mv;

//*********************************************************************************************
//var arraypizzas = simplificado;
var arraypizzas = Mv;
//*********************************************************************************************

//********************************Se hace por b_console****************************************
//var arraypizzas = [['mushrooms', 'tomatoes', 'onions', 'pineapple', 'ham', 'neapolitan-crust', 'basil', 'emmental-cheese', 'mozzarella', 'cheddar' ]];
//********************************Se hace por b_console****************************************
// COMO EL RSULTADO FUE UN SOLO ELEMENTO  NO SE REQUIERE HACER LOS SIGUIENTE SE CREA EL ARCHIVO
// b_console "encontrar por unitario"
//*********************************************************************************************

//***************************se hace para c_many_ingredients*********************************************
// el siguiente cidigo solo se agrega para el caso  C c_many_ingredients
var minimizar = require('./c_funminimizar10');
var funmin = minimizar();
//console.log(funmin);
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
    var combinaciones0 = obtenerConjuntoPotencia(funmin);
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
      console.log('Se Obtiene el o los del arreglo que pertenece al valor máximo');
      //console.log(indicemax);

      //IMPORTANTE SE AGREGA EN FOR PARA OBTENER TODOS LOS conjuntoPizzasmax
      // una vez obtenido el key regresar al conjunto cincoCdosfiltered para obtener el arreglo del arreglo con mejor puntaje sub
      //var conjuntoPizzasmax = cincoCdosfiltered[indicemax[0]]; // se coloca el subindice [0] ya que puede haber mas de dos valores iguales maximos y para seleccionar solo uno de ellos
      //console.log('Se Obtiene la combinacion que genera maximos Ingredientes del primer indice max ess decir[0]');
      //console.log(conjuntoPizzasmax);
      for (var r = 0; r < indicemax.length; r++) {
        var conjuntoPizzasmax = cincoCdosfiltered[indicemax[r]];

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
}
