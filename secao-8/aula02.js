const people = {
  name: 'Vinicius',
  lastName: 'Dal Bem',
  age: 18,
  address: {
    street: 'Brasil',
    n: 1000
  }
};

// Atribuição via desestruturação
const { name, lastName, height, sex = 'Male', ...rest } = people;
console.log(name, lastName, height, sex);
console.log(rest);
