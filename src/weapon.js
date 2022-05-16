'use string'

let weapon ={
    cargar: true,
    disparar: function disparar(){
                 if(this.cargar){
                    console.log(`pum pum pum`);
                    this.cargar = false;
                    }else{  
                    console.log(` Cargar arma`);
                    }   
                 }
}

module.exports = weapon;
