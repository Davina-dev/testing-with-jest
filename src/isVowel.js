
let isVowel = (char) => {
  if (typeof char !== 'string') {
    throw TypeError(' Argumento deberia ser un string')
  }
  if (char.length !== 1) {
    throw Error(' Argumento es un string')
  }
  return 'aeiou'.includes(char)
}

let countVowels = (string) =>
  [...string].reduce(
    (memo, char) =>
      memo.hasOwnProperty(char) ? { ...memo, [char]: memo[char] + 1 } : memo,
    { a: 0, e: 0, i: 0, o: 0, u: 0 },
  )

module.exports = { isVowel, countVowels }
