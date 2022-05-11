const fizzbuzz = require('../src/fizzbuzz')

describe('Kata fizzbuzz test', () => {

  it('returns 1 for the number 1', () => {
    expect(fizzbuzz(1)).toEqual(1);
  })

  it('returns 7 for the number 7', () => {
    expect(fizzbuzz(7)).toEqual(7);
  })

  it('returns "Fizz" for the number 3', () => {

      expect(fizzbuzz(3)).toBe('Fizz');  
      });    
  })

  it('returns "Fizz" for the number 9', () => {
    expect(fizzbuzz(9)).toEqual('Fizz')
  })

  it('returns "Buzz" for the number 5', () => {
    expect(fizzbuzz(5)).toEqual('Buzz')
  })

  it('returns "Buzz" for the number 10', () => {
    expect(fizzbuzz(10)).toEqual('Buzz')
  })

  it('returns "FizzBuzz" for the number 15', () => {
    expect(fizzbuzz(15)).toEqual('Fizzbuzz')
  })

  it('returns "FizzBuzz" for the number 30', () => {
    expect(fizzbuzz(30)).toEqual('Fizzbuzz')
  })


