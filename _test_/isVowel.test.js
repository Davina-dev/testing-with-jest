const { isVowel, countVowels } = require('../src/isVowel.js')

describe('isVowel', () => {
  it('debería arrojar cuando se invoca sin string', () => {
    expect(() => isVowel()).toThrow(Error)
  })

  it('debería arrojar cuando string no tiene length 1', () => {
    expect(() => isVowel('ae')).toThrow(Error)
  })

  it('debería retorna true para input "a"', () => {
    expect(isVowel('a')).not.toBe(false)
    expect(isVowel('a')).toBe(true) //compara si esos obj son la misma referencia, si es el mismo obj en sí
    expect(isVowel('a')).toEqual(true)
    expect(isVowel('a')).toBeTruthy()
  })

  it('debería retorna false para input "c"', () => {
    expect(isVowel('c')).toBe(false)
  })
})

describe('countVowels', () => {
  it('debería retornar un obj con las vocales ', () => {
    // expect(countVowels('abc')).toBe ({a:1, e:0, i:0, o:0, u:0}) da error porque no es el mismo objeto. por referencia
    expect(countVowels('abc')).not.toBe({ a: 1, e: 0, i: 0, o: 0, u: 0 })
    expect(countVowels('abc')).toStrictEqual({ a: 1, e: 0, i: 0, o: 0, u: 0 }) //por valor (no es el mismo obj, pero es uno igual)
  })
  
})
