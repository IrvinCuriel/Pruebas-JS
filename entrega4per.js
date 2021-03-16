//5 1 2 1
//3 onion pepper olive
//3 mushroom tomato basil
//3 chicken mushroom pepper
//3 tomato mushroom basil
//2 chicken basil

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

    // Pizza 0 = M0
    var M0 = new Array();
    M0[0] = 'onion';
    M0[1] = 'pepper';
    M0[2] = 'olive';
    console.log('Pizza 0 = M0');
    console.log(M0);

    // Pizza 1 = M1
    var M1 = new Array();
    M1[0] = 'mushroom';
    M1[1] = 'tomato';
    M1[2] = 'basil';
    console.log('Pizza 1 = M1');
    console.log(M1);

    // Pizza 2 = M2
    var M2 = new Array();
    M2[0] = 'chicken';
    M2[1] = 'mushroom';
    M2[2] = 'pepper';
    console.log('Pizza 2 = M2');
    console.log(M2);

    // Pizza 3 = M3
    var M3 = new Array();
    M3[0] = 'tomato';
    M3[1] = 'mushroom';
    M3[2] = 'basil';
    console.log('Pizza 3 = M3');
    console.log(M3);

    // Pizza 4 = M4
    var M4 = new Array();
    M4[0] = 'chicken';
    M4[1] = 'basil';
    console.log('Pizza 4 = M4');
    console.log(M4);

// Formato de salida
// D = Numero de equipos a las que se les entrega pizzas
// L = Numero de personas en el equiṕo - P = lista de las pizzas entregadas

// Arreglo de pizas = MT
var arraypizzas = new Array();
arraypizzas[0] = M0;
arraypizzas[1] = M1;
arraypizzas[2] = M2;
arraypizzas[3] = M3;
arraypizzas[4] = M4;
console.log('Arreglo de Pizas con ingredientes = arraypizzas');
console.log(arraypizzas);

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
    if (combinaciones0[i].length == 4) { //IMPORTANTE PARA DEFINIR LA LONGITUD DE LAS CONBINACIONES r EN nCr DONDE r es numerode elementos en combinacion
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


    var longconjuntoPizzasmax = conjuntoPizzasmax.length;
    var pizzas = [];
    for (var i = 0; i < longconjuntoPizzasmax; i++) {
      var elementodecombinacion = conjuntoPizzasmax[i];

      switch (elementodecombinacion) {
        case M0:
          pizzas.push('M0');
          break;
        case M1:
          pizzas.push('M1');
          break;
        case M2:
          pizzas.push('M2');
          break;
        case M3:
          pizzas.push('M3');
          break;
        case M4:
          pizzas.push('M4');
          break;
          default: "No se encuantra";
      }
    }
    console.log('Lista de las pizzas a entregar a un Equipo de 4 personas');
    console.log(pizzas);
