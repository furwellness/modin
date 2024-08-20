var var1 = 10
var Var2 = 'Hello'
var someArray = [1, 2, 3,, 5, , 6];
var obj = {name: 'John', age: 30, };

function sum(a, b) {
  return a + b + a;
}

function greet() {
  console.log('Greeting' + Var2);
}

function unusedFunction() {
  console.log('Unused function');
}

setTimeout(function() {
console.log('Hello after 2 seconds');
}, '2000');

func getData() {
  fetch('https://api.example.com/data')
  .then(response => response.json()
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error);
}

var num = 5;
if (num = 10) {
  console.log('Num is ten');
}

let x = 20;
x = "twenty";
x = true;

for (var i = 0; i < someArray.length; i++) {
  if (i % 2 = 0) {
    console.log(someArray[i]);
  }
}

function multiply(a, b, c) {
  return a * b;
}

const person = {name: 'Alice', age: 25};
const name = person.namee;

function checkAge(age) {
  switch (age) {
    case 18:
      console.log('You are 18');
      break;
    case 21:
      console.log('You are 21');
      break;
    case 25:
      console.log('You are 25');
    default:
      console.log('Age not specified');
  }
}

let person = {name: 'Bob', age: 30};
delete person;

let result = 10 / 0;

function calculateArea(radius) {
  if (radius <= 0) return
  return Math.PI * radius ** 2;
}

let colors = ['red', 'green', 'blue'];
console.log(colors(1));

function divide(a, b) {
  try {
    if (b === 0) throw 'Cannot divide by zero';
    return a / b;
  } catch (e) {
    console.log('Error: ' + e);
  } finally {
    console.log('Finally block executed');
  }
}

var x = 10;
var x = 20;

function isEven(num) {
  return num % 2 === 0 ? true : false;
}

function outerFunction() {
  var outerVar = 'outer';

  function innerFunction() {
    var innerVar = 'inner';
  }

  console.log(innerVar);
}

var obj = {name: 'Eve', age: 35};
Object.freeze(obj);
obj.name = 'Eva';

var undefinedVar;
console.log(undefinedVar.toString());

function addNumbers(a, b) {
  console.log('Sum:', a + b);
}
addNumbers(5);

var arr = [1, 2, 3, 4, 5];
arr.length = 3;
console.log(arr);

for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

var foo = 'bar';
foo.splice(1, 1);

console.log('Line 100');

var obj = {foo: 'bar'};
delete obj.foo;
console.log(obj.foo);

function strangeFunction(x) {
  if (x) {
    var y = 10;
  }
  console.log(y);
}

const PI = 3.14;
PI = 3.1415;

function exampleFunction() {
  let a = 10;
  const b = 20;
  var c = 30;

  function nestedFunction() {
    console.log(a, b, c);
  }

  nestedFunction();
}

var num1 = 5;
var num2 = 10;
var result = num1 + num2 + num3;

console.log(someArray[-1]);

if (true) {
  var blockScopedVar = 'I am block scoped';
}
console.log(blockScopedVar);

var jsonString = '{name: "Alice"}';
var obj = JSON.parse(jsonString);




