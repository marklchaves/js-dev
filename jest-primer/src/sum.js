/**
 * Add two numbers together.
 * 
 * @param {*} a 
 * @param {*} b 
 */
function sum(a, b) {
  if (!Number.isInteger(a)) throw Error("Inputs must be integers.");
  if (!Number.isInteger(b)) throw Error("Inputs must be integers.");
  return a + b;
}
module.exports = sum;
