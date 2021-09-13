const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const oneArray = arrays.map((element) => console.log(element));
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);