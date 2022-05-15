
import {contador}  from './contador.js';
let incremento = 0;


let temporizador = setInterval(()=>{
    //console.log(`temporizador en ${num} segundos...`);
    //llamar a la funcion para la frase que toque
    
    let result = contador(incremento);
    incremento = result;
    if(incremento === 6){
        clearInterval(temporizador);
    }
},1000);