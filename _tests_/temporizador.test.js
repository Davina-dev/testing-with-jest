//  "test": " jest --verbose --collectCoverage --watchAll "
const {contador, getText} = require ('../src/contador.js');



describe('test contador', () => {
    //mirar varios casos para ver que siempre se comporta así
    it('siempre q le pasas un num  ha de hacer que el num sea 1 mayor', () => {
        expect(contador(0)).toEqual(1);
        expect(contador(1)).toEqual(2);
        expect(contador(2)).toEqual(3);
        expect(contador(3)).toEqual(4);
        expect(contador(4)).toEqual(5);
        expect(contador(5)).toEqual(6);
    })
})

describe('imprimir el texto', () => {
    
    it('siempre q le pasas un num  se espera un string', () => {
        expect(getText(1)).toEqual(expect.any(String));
        expect(getText(0)).toContain(' soy el 0 del switch');
        expect(getText(1)).toContain(' soy el 1 del switch');
        expect(getText(2)).toContain(' soy el 2 del switch');
        expect(getText(3)).toContain(' soy el 3 del switch');
        expect(getText(4)).toContain(' soy el 4 del switch');
        expect(getText(5)).toContain(' soy el 5 del switch');
       
       
    })
    it('si no pasas el numero esperado deberia devolver error', () => {
        expect(() => getText(-1)).toThrow(Error);
        expect(() => getText(2.6)).toThrow(Error);
        expect(() => getText()).toThrow(Error);
        expect(() => getText(NaN)).toThrow(Error);
        expect(() => getText(undefined)).toThrow(Error);
        expect(() => getText(18)).toThrow('valor no esperado');
       
    })
})

   
        
    // cualquier num menos o mayor a 5 devuelve "valor inesperado"
