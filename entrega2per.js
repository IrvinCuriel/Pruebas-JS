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
    //console.log(combinaciones0);
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
  console.log('Arreglo con combinaciones 5C2 del Arreglo arraypizzas CON EMPTY ITEMS');
  console.log(cincoCdos);

  //Filtrar arreglos emptys del array anterior
  var cincoCdosfiltered = cincoCdos.filter(function (el) {
    return el != null;
  });
  console.log('Arreglo con combinaciones 5C2 del Arreglo arraypizzas Filtrado');
  console.log(cincoCdosfiltered);
  var longcincoCdos = cincoCdosfiltered.length
  console.log('Numero de combinaciones');
  console.log(longcincoCdos);

  // Se realiza un For  y dentro un segundo for para concatenar y obtener un conjunto de elementos concatenados
    var longcincoCdos = cincoCdosfiltered.length
    var unionsubconjunto = [];
    for (var i = 0; i < longcincoCdos; i++) {
      var primeraunion = [];
      var par = cincoCdosfiltered[i];
      var longpar = par.length;
       for (var s = 0; s < longpar-1; s++) {

         Set.prototype.union = function(segundoConjunto){
              let conjuntoUnion = new Set();

              for(const elementos of this) {
                conjuntoUnion.add(elementos);
              }
              for (const elementos of segundoConjunto) {
                conjuntoUnion.add(elementos);
              }
              return conjuntoUnion;
         };
         let conjunion = new Set(par[s]);
         let conjunionsig = new Set(par[s+1]);
         let union01 = conjunion.union(conjunionsig);
         console.log(union01);

         let arrayunion01 = Array.from(union01);
         console.log(arrayunion01);
         unionsubconjunto.push(arrayunion01);

           //for (var j = 0; j < longsubcon; j++) {
           //}

       }
    }

    console.log('Conjunto de Ingredientes de la combinacion 5C2 SIN elementos repetidos');
    console.log(unionsubconjunto);
    var longunionsubconjunto = unionsubconjunto.length;
    console.log('Numero de combinaciones');
    console.log(longunionsubconjunto);
    //var buscando = unionsubconjunto[2];
    //console.log(buscando);
    //var longbuscando = buscando.length;
    //console.log(longbuscando);

    // Sumar cantidad de elementos(Ingredientes en cada arreglo del arreglo de combinaciones)
    var longunionsubconjunto = unionsubconjunto.length;
    var sumaingredientes = [];
    for (var i = 0; i < longunionsubconjunto; i++) {
      var arreglosecundario = unionsubconjunto[i].length;
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
      console.log('Se Obtiene el indice del arreglo que pertenece al valor máximo');
      console.log(indicemax);
      // una vez obtenido el key regresar al conjunto cincoCdosfiltered para obtener el arreglo del arreglo con mejor puntaje sub
      var conjuntoPizzasmax = cincoCdosfiltered[indicemax[0]]; // se coloca el subindice [0] ya que puede haber mas de dos valores iguales maximos y para seleccionar solo uno de ellos
      console.log('Se Obtiene la combinacion que genera maximos Ingredientes');
      console.log(conjuntoPizzasmax);

    //
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
    console.log('Lista de las pizzas a entregar a un Equipo de 2 personas');
    console.log(pizzas);
