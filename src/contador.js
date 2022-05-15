 
 //aumentar el num
 function contador(num){
    console.log(getText(num))
      num++;
      return num;
}

 //imprimir texto
function getText(num){
  switch (num) {
    case 0:
      return(` soy el ${num} del switch`)
      break;
    case 1:
        return(` soy el ${num} del switch`)
      break;
    case 2:
        return(` soy el ${num} del switch`)
      break;
    case 3:
        return(` soy el ${num} del switch`)
      break;
    case 4:
        return(` soy el ${num} del switch`);
      break;
    case 5:
        return(` soy el ${num} del switch`);
      break;
      default:
        throw Error(`valor no esperado`);
      break;
  }

}

module.exports = { contador,  getText};


//setTimeout -ejecuta una función DESPUËS de cierto tiempo
//setTimeOut--> empieza a contar una vez finlizada el tiempo que le he puesto en la función
//ejemplo de setTimeout anidado
/* let numero = 0;
let incrementoID = setTimeout( function incremento(){
    console.log(numero);
    incrementoID = setInterval(incremento, 1000)
}); */

// setInterval - ejecuta CADA cierto tiempo--> empieza a contar desde el principio de la funcion

//conteo regresivo: