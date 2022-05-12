const calculator = require('../src/calculator.js')

describe('calculator test', () => {

  it('should return falsy', () => {
    //expect(calculator.checkValue(0)).toBeFalsy()
    //expect(calculator.checkValue(undefined)).toBeFalsy()
    //expect(calculator.checkValue(null)).toBeFalsy()
    expect(calculator.checkValue("hi")).toBeTruthy();
  })

  it('should return null', () => {
    expect(calculator.isNull()).toBeNull()
  })

  it('adding 1+2 should return 3', () => {
    expect(calculator.sum(1, 2)).toBe(3)
  })

  it('adding 1-2 should return 1', () => {
    expect(calculator.diff(1, 2)).toBe(-1)
  })

  test("Should be less than 100", () => {
    const num1 = 50;
    const num2 = 60;
    // expect(num1 + num2).toBeLessThan(100);
    // expect(num1 + num2).toBeLessThan(120);
    // expect(num1 + num2).toBeLessThanOrEqual(110);
    expect(num1 + num2).toBeGreaterThan(100);
  });


  //testing other tests*******************************************
  // Regex
  test("Should be character i in ice cream", () => {
    // test for success match
    // expect("ice cream").toMatch(/i/);
    // expect("ice cream").toMatch(/I/i);
    // expect("ce cream").toMatch(/i/);
    // expect("ce cream").toMatch(/e/);

    // test for failure match
    // expect("hi").not.toMatch(/hi/);
    expect("hi").not.toMatch(/hello/);
  });

  // Array
  test("Jest should be in array", () => {
    array = ["Jest", "Unit Testing", "JavaScript"];
    // expect(array).toContain("jest");
    expect(array).toContain("Jest");
  });

})
