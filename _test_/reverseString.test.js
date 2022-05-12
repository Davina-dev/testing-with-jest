const reverseString = require('../src/reverseString.js')

describe('reverse string', () => {
  it('reverseString function exixt', () => {
    expect(reverseString).toBeDefined();
  })

  it('String reverses with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
  })
})
