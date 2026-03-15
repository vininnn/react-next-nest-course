// Tipos básicos
let name: string;
let age: number;
let isAdult: boolean;
let symbol: symbol;
let big: bigint;

// Arrays -> arrayType: Array<T>;
let arrayNum: Array<number>;
let arrayStr: Array<string>;

// Objetos
let person: {name: string, age: number, isAdult?: boolean};

// Funções
function sum(x: number, y:number): number{
  return x + y;
}
