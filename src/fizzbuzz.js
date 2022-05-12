function fizzbuzz(number) {
  if (typeof number !== 'number') {
    throw TypeError(' el argumento deberia ser un número')
  }
  // if (typeof number === 'null') {
  //   throw TypeError(' no ha puesto argumento')
  // }

  if (number % 3 !== 0 && number % 5 !== 0) {
    return number
  }
  if (number % 3 === 0 && number % 5 === 0) {
    return 'Fizzbuzz'
  }
  if (number % 3 === 0) {
    return 'Fizz'
  }
  if (number % 5 === 0) {
    return 'Buzz'
  }
}

module.exports = fizzbuzz
