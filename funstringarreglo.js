module.exports = function(cadenaADividir,separador) {
  var nuevoarreglo = [];
   var arrayDeCadenas = cadenaADividir.split(separador);
   for (var i=0; i < arrayDeCadenas.length; i++) {
      nuevoarreglo.push(arrayDeCadenas[i]);
   }
   return nuevoarreglo;
}
