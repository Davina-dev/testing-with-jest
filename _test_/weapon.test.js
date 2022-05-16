const weapon = require ('../src/weapon.js');


    describe('test weapon', () => {
    
        test('espero que al disparar no pueda cargar más', () => {
          weapon.disparar(); 
          expect(weapon.cargar).toEqual(false);
        })
      })