//número de pizzas disponibles en la pizzería
var M = 5;
//número de equipos de 2 personas
var T2 = 1;
//número de equipos de 3 personas
var T3 = 2;
//número de equipos de 4 personas
var T4 = 1;

//Entrada
var entrada = new Array();
entrada[0] = M;
entrada[1] = T2;
entrada[2] = T3;
entrada[3] = T4;
console.log(entrada);

// Lineas M (descripcion de pizzas)
    //numero de ingredientes I - lista de ingredientes LI

// Formato de salida
// D = Numero de equipos a las que se les entrega pizzas
// L = Numero de personas en el equiṕo - P = lista de las pizzas entregadas

//*********************************************************************************************
// Arreglo de pizas = MT
/*
var arraypizzas = new Array();
arraypizzas[0] = M0;
arraypizzas[1] = M1;
arraypizzas[2] = M2;
arraypizzas[3] = M3;
arraypizzas[4] = M4;
console.log('Arreglo de Pizas con ingredientes = arraypizzas');
console.log(arraypizzas);
*/
//*********************************************************************************************


//*********************************************************************************************
let fs = require('fs');

let archivo = fs.readFileSync('a_example', 'utf-8');
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
  console.log('informacion filtrada');
  console.log(informacionfiltrada);
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
console.log('Arreglo de Pizas con ingredientes = arraypizzas');
console.log(M);
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
    if (combinaciones0[i].length == 3) { //IMPORTANTE PARA DEFINIR LA LONGITUD DE LAS CONBINACIONES r EN nCr DONDE r es numerode elementos en combinacion
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
  console.log('Arreglo con combinaciones 5Cr del Arreglo cincoCdos Filtrado');
  console.log(cincoCdosfiltered);
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

  console.log('Array Total que representa nCr con union de subconjuntos CON VALORES REPETIDOS');
  console.log(sub); //Muestra arreglos con elementos repetidos
  //console.log('Es array???');
  //console.log(Array.isArray(sub));

  //eliminar los arreglos con valores repetidos
        // buscar elementos con indices repetidos
        var longsub = sub.length;
        var subnorepetidos = [];
        for (var i = 0; i < longsub; i++) {
          var segundoarreglo = sub[i];
          var longsegundoarreglo = segundoarreglo.length;
          //console.log('Aqui...5');
          //console.log(longsegundoarreglo);
          //console.log('Es array???');
          //console.log(Array.isArray(segundoarreglo));
          //var tipo = segundoarreglo[0];
          //console.log('que tipo es ');
          //console.log(tipo);
          //console.log(typeof tipo);

          const nuevoArr = Array.from(new Set(segundoarreglo))

              subnorepetidos.push(nuevoArr);

        }
        console.log("Array Total que representa nCr con union de subconjuntos con valores NO REPETIDOS");
        console.log(subnorepetidos);

    // Sumar cantidad de elementos(Ingredientes en cada arreglo del arreglo de combinaciones)
    var longsubnorepetidos = subnorepetidos.length;
    var sumaingredientes = [];
    for (var i = 0; i < longsubnorepetidos; i++) {
      var arreglosecundario = subnorepetidos[i].length;
      sumaingredientes.push(arreglosecundario);
    }
    console.log('Se obtiene un arreglo con la suma de la cantidad de ingredientes en cada combinación');
    console.log(sumaingredientes);
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
      console.log(indicemax);
      // una vez obtenido el key regresar al conjunto cincoCdosfiltered para obtener el arreglo del arreglo con mejor puntaje sub
      var conjuntoPizzasmax = cincoCdosfiltered[indicemax[0]]; // se coloca el subindice [0] ya que puede haber mas de dos valores iguales maximos y para seleccionar solo uno de ellos
      console.log('Se Obtiene la combinacion que genera maximos Ingredientes del primer indice max ess decir[0]');
      console.log(conjuntoPizzasmax);


//*********************************************************************************
  // arreglo como objeto PRUEBAS
/*
  console.log('keys del bjeto');
  console.log(Object.keys(M)); // console: ['0', '1', '2']

  console.log('que tipo es M');
  console.log(typeof M);
  console.log('que tipo es arraypizzas');
  console.log(typeof arraypizzas);

  var ejemplo = ['mushroom', 'tomato', 'basil'];

  var indicespizzas = [];
  const found = arraypizzas.find( (arraypizza, index) => {
    console.log(index);
    indicespizzas.push(index);
    //console.log(JSON.stringify(arraypizza) === JSON.stringify(ejemplo));
    return JSON.stringify(arraypizza) === JSON.stringify(ejemplo);
  })
  console.log('metodo find');
  console.log('Found', found);
  console.log('indicespizzas');
  console.log(indicespizzas);

  console.log('nuevo');
    for (var key in M) {
      console.log(key);
      console.log(M[key]);
    }
*/
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
    console.log('indices de las pizzas');
    console.log(indicespizzas);
//*********************************************************************************
    //Obtener el ultimo elemento que es el indice para agregarlo al  array pizzas que seran las pizzas a pedir
    var ultimonumero = indicespizzas[indicespizzas.length-1];
    pizzas.push(ultimonumero);

//*********************************************************************************
/*
      switch (elementodecombinacion) {
        case M[0]:
          pizzas.push('M0');
          break;
        case M[1]:
          pizzas.push('M1');
          break;
        case M[2]:
          pizzas.push('M2');
          break;
        case M[3]:
          pizzas.push('M3');
          break;
        case M[4]:
          pizzas.push('M4');
          break;
        case M[5]:
          pizzas.push('M5');
          break;
          default: "No se encuantra";
      }
*/
//*********************************************************************************

    }
    console.log('Lista de las pizzas a entregar a un Equipo de T personas');
    console.log(pizzas);
