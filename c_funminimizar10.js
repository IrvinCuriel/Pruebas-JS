module.exports = function() {
  //*********************************IMPORTADO DESDE MINIMIZAR************************************************************
  let fs = require('fs');

  let archivo1 = fs.readFileSync('c_many_ingredients', 'utf-8');
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
    console.log('Arreglo de Pizas con ingredientes = arraypizzas');
    console.log(Mv1);
    var arreglo = Mv1;

  //*****************************************************************************

  //ORDENAR VALORES
  var arregloprincipal = arreglo.sort(function (a, b){
    return a.length - b.length;
  });
  console.log('arreglo ordenado');
  console.log(arregloprincipal);

  var indeliminar = [];
  for (var i = 0; i < arregloprincipal.length; i++) {

    var array1 = arregloprincipal[i];
    console.log('arra1 [i]');
    console.log(array1);

    //var sinelemento = arregloprincipal.splice(i,1);
    //console.log('sin [i] elemento');
    //console.log(sinelemento);

    var sinelemento = delete arregloprincipal[i];
    console.log('arreglo principal con borrado [i]');
    console.log(arregloprincipal);

    //Filtrar arreglos emptys del array anterior
    var principalfiltrado = arregloprincipal.filter(function (el) {
      return el != null;
    });
    console.log('principalfiltrado');
    console.log(principalfiltrado);

    for (var j=0; j < principalfiltrado.length; j++) {
      var array2 = principalfiltrado[j];

      //Subconjunto
        Set.prototype.subconjunto = function(segundoConjunto) {
          if(this.size > segundoConjunto) {
            return false;
          } else {
            for (var elementos of this) {
              if (!segundoConjunto.has(elementos)){
                return false;
              }
            }
            return true;
          }
        };
        let conjsub0 = new Set(array1);
        let conjsub1 = new Set(array2);

        let subconjunto = conjsub0.subconjunto(conjsub1);
        //console.log('subconjunto');
        //console.log(subconjunto);

        if (subconjunto) {
            indeliminar.push(i);
         }

    }

  }

  // QUITAR duplicados de indeliminar
  var arrayWithDuplicates = indeliminar;
  function removeDuplicates(originalArray) {
       var newArray = [];
       var lookupObject  = {};

       for(var i in originalArray) {
          lookupObject[originalArray[i]] = originalArray[i];
       }

       for(i in lookupObject) {
           newArray.push(lookupObject[i]);
       }
        return newArray;
   }
  var indeliminarfiltrado = removeDuplicates(arrayWithDuplicates);
  console.log('indices a eliminar SIN DUPLICADOS');
  console.log(indeliminarfiltrado);

  //*****************************************************************************

  let archivo2 = fs.readFileSync('c_many_ingredients', 'utf-8');

  var separador2 = "\n";
  var conjuntoingredientes2 = require('./funstringarreglo');
  var informacion2 = conjuntoingredientes2(archivo2, separador2);

  var longinformacion2 = informacion2.length;

  var remover2 = informacion2.splice(0, 1);
  var remover2 = informacion2.splice((informacion2.length-1), 1);

  //Filtrar arreglos emptys del array anterior
    var informacionfiltrada2 = informacion2.filter(function (el) {
      return el != null;
    });
    var longfiltrada2 = informacionfiltrada2.length;

    var Mv2 = new Array()
    for (var i = 0; i < longfiltrada2; i++) {
      var pizza2 = informacionfiltrada2[i];
      var espacio2 = " ";
      var ingredientes2 = require('./funstringarreglo');
      var nombreingredientes2 = ingredientes2(pizza2, espacio2);
      var eliminarprimero2 = nombreingredientes2.splice(0, 1);
      //Filtrar arreglos emptys del array anterior
        var listaingredientes2 = nombreingredientes2.filter(function (el) {
          return el != null;
        });
        Mv2[i] = listaingredientes2;
    }
    console.log('Arreglo de Pizas con ingredientes = arraypizzas');
    console.log(Mv2);
    var otravezarreglo = Mv2;

  //*****************************************************************************

  console.log('otravezarreglo');
  console.log(otravezarreglo);
  //ORDENAR VALORES de arreglooriginal
  var arreglooriginal = otravezarreglo.sort(function (a, b){
    return a.length - b.length;
  });
  console.log('arreglo ordenado');
  console.log(arreglooriginal);

/*
  //Eliminar elementos de arreglooriginal
  for (var i = 0; i < indeliminarfiltrado.length; i++) {
    delete arreglooriginal[indeliminarfiltrado[i]];
  }
  console.log('arreglo sin ingredientes repetidos');
  console.log(arreglooriginal);
  //Filtrar arreglos emptys del array anterior
  var simplificadomin = arreglooriginal.filter(function (el) {
    return el != null;
  });
*/

  console.log('ESTE ARREGLO SERA EL QUE TRABAJARA *ARREGLO SIN PIZZAS REPETIDAS ');
  console.log(arreglooriginal);
  console.log('longitud de nuevo arreglo');
  console.log(arreglooriginal.length);

  //*********************************************************************************************

  var simplcortadomin = arreglooriginal.splice((arreglooriginal.length-20), 20);
  console.log('ultimos cortados del simplificadomin');
  console.log(simplcortadomin);

  return simplcortadomin;
}
