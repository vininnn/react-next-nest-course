// Function Hoisting
Hello();
function Hello() {
  console.log('Hello World!')
}

// First-Class Object
// Function expression
const goodbye = function() {
  console.log('Goodbye!')
};
goodbye();

function exeFunction(func) {
  func()
}
exeFunction(Hello);

// Arrow function
const arrowFunction = () => {
  console.log('Arrow function')
};
arrowFunction();

const obj = {
  talk: function() {
    console.log('Im talking')
  }
};
obj.talk()
