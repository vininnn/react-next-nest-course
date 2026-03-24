// Array<T> - T[]
function multiArgs(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

function toUpper(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase())
}

const result = multiArgs(1,2,3);
const stringResult = concatString('a', 'b', 'C');
const stringUpper = toUpper('a', 'b', 'c');

console.log(result);
console.log(stringResult);
console.log(stringUpper);
