// Tipo object
const objectA:{
  A: string;
  readonly B: string;
  C?: string;
  [key: string]: unknown;
} = {
  A: 'Valor A',
  B: 'Valor B',
};

objectA.A = 'Outro Valor';
objectA.C = 'Nova Chave';
objectA.D = 'Nova Chave';

console.log(objectA)
