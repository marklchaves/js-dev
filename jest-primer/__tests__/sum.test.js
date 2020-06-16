const sum = require('../src/sum');

describe("Sum function", () => {
  test("The sum of 1 + 2 should equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("The sum of -1 + 2 should equal 1", () => {
    expect(sum(-1, 2)).toBe(1);
  });

  test("The sum of a string + 2 should throw an error", () => {
    const inputStr = "Hello World!";
    expect(() => {
      sum(inputStr, 2);
    }).toThrowError(Error("Inputs must be integers."));
  });

  test("The sum of 1 + a string should throw an error", () => {
    const inputStr = "10";
    expect(() => {
      sum(1, inputStr);
    }).toThrowError(Error("Inputs must be integers."));
  });
});
