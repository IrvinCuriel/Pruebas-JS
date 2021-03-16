module.exports = function() {
  //*********************************IMPORTADO DESDE MINIMIZAR************************************************************
  let fs = require('fs');

  let archivo1 = fs.readFileSync('e_many_teams', 'utf-8');
  //console.log(archivo1);

  var separador1 = "\n";
  var conjuntoingredientes1 = require('./funstringarreglo');
  var informacion1 = conjuntoingredientes1(archivo1, separador1);
  //console.log('matriz obtenida del archivo plano');
  //console.log(informacion1);
  var longinformacion1 = informacion1.length;
  //console.log('longitud de la matriz');
  //console.log(longinformacion1);

  var remover1 = informacion1.splice(0, 1);
  var remover1 = informacion1.splice((informacion1.length-1), 1);

  //console.log('informacion sin la primera y ultima linea');
  //console.log(informacion1);
  //console.log('longitud sin a primera y ultima linea');
  //console.log(longinformacion1);

  //Filtrar arreglos emptys del array anterior
    var informacionfiltrada1 = informacion1.filter(function (el) {
      return el != null;
    });
    //console.log('matriz FILTRADA');
    //console.log(informacionfiltrada1);
    var longfiltrada1 = informacionfiltrada1.length;
    //console.log('longitud de la matriz FILTRADA');
    //console.log(longfiltrada1);

    var Mv1 = new Array()
    for (var i = 0; i < longfiltrada1; i++) {
      var pizza1 = informacionfiltrada1[i];
      var espacio1 = " ";
      var ingredientes1 = require('./funstringarreglo');
      var nombreingredientes1 = ingredientes1(pizza1, espacio1);
      var eliminarprimero1 = nombreingredientes1.splice(0, 1);
      //Filtrar arreglos emptys del array anterior
        var listaingredientes1 = nombreingredientes1.filter(function (el) {
          return el != null;
        });
        Mv1[i] = listaingredientes1;
    }
    //console.log('Arreglo de Pizas con ingredientes = arraypizzas');
    //console.log(Mv1);
    var arreglo = Mv1;

  //*****************************************************************************

  //ORDENAR VALORES
  var arregloprincipal = arreglo.sort(function (a, b){
    return a.length - b.length;
  });
  //console.log('arreglo ordenado');
  //console.log(arregloprincipal);


  console.log('ESTE ARREGLO SERA EL QUE TRABAJARA *ARREGLO SIN PIZZAS REPETIDAS ');
  //console.log(simplificadomin);
  console.log('longitud de nuevo arreglo');
  console.log(arregloprincipal.length);

  //*********************************************************************************************

  var simplcortadomin = arregloprincipal.splice((arregloprincipal.length-80), 20);
  console.log('ultimos cortados del simplificadomin');
  console.log(simplcortadomin);

  return simplcortadomin;
}
