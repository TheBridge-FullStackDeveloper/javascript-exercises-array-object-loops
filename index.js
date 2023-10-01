// Crea un array vacío llamado `stack`
let stack = [];

// Crea un array numbers con los números del 1 al 5 in orden ascendente
let numbers = [1, 2, 3, 4, 5];

// Crea una variable y guarda la cantidad de elementos en el array `numbers`
let numbersLength = numbers.length;

// multiplica por 2 cada elemento del array `numbers` utilizando un bucle `for`
function multiplyByTwo(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
  }
  return numbers;
}

// La función evenNumbers tiene que devolver los números pares del array `numbers`
function evenNumbers(numbers) {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

// La función numbersBackwards tiene que devolver los números del array `numbers` en orden inverso
function numbersBackwards(numbers) {
  let numbersBackwards = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    numbersBackwards.push(numbers[i]);
  }
  return numbersBackwards;
}

// La función `sum` tiene que devolver la suma de todos los números del array `numbers`
function sum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// La función `average` tiene que devolver el promedio de todos los números del array `numbers`
function average(numbers) {
  let average = 0;
  for (let i = 0; i < numbers.length; i++) {
    average += numbers[i];
  }
  return average / numbers.length;
}

// La función `biggestPrime` tiene que devolver el número primo más grande del array `numbers`

function isPrime(number) {
  let isPrime = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}

function biggestPrime(numbers) {
  let biggestPrime = 0;
  for (let i = 2; i < numbers; i++) {
    if (isPrime(i)) {
      biggestPrime = i;
    }
  }
  return biggestPrime;
}

// Crea una variable obj y asígnale un objeto vacío
let obj = {};

// Agrega una propiedad `name` al objeto y asígnale tu nombre como valor
obj.name = "Jorge";

// Agrega una propiedad `lastName` al objeto y asígnale tu apellido como valor
obj.lastName = "Gonzalez";

// Agrega una propiedad `birthYear` al objeto y asígnale tu año de nacimiento como valor
obj.birthYear = 1995;

// Agrega una función `getFullName` al objeto que devuelva tu nombre completo
obj.getFullName = function () {
  return `${this.name} ${this.lastName}`;
};

// Agrega una función `getAge` al objeto que devuelva tu edad (asumiendo que es el año 2023)
obj.getBirthYear = function () {
  return 2023 - this.birthYear;
}
