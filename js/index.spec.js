describe("Pruebas para el código", function() {
  // Pruebas para el array `numbers`
  it("Debería tener un array llamado 'numbers' con 5 elementos", function() {
    let numbers = [1, 2, 3, 4, 5];
    expect(numbers.length).toBe(5);
  });

  // Pruebas para la función multiplyByTwo
  it("multiplyByTwo Debería multiplicar cada elemento de 'numbers' por 2", function() {
    let numbers = [1, 2, 3, 4, 5];
    const result = multiplyByTwo(numbers);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  // Pruebas para la función evenNumbers
  it("evenNumbers Debería devolver los números pares de 'numbers'", function() {
    let numbers = [1, 2, 3, 4, 5];
    const result = evenNumbers(numbers);
    expect(result).toEqual([2, 4]);
  });

  // Pruebas para la función numbersBackwards
  it("numbersBackwards Debería devolver los números de 'numbers' en orden inverso", function() {
    let numbers = [1, 2, 3, 4, 5];
    const result = numbersBackwards(numbers);
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });

  // Pruebas para la función sum
  it("sum Debería devolver la suma de todos los elementos de 'numbers'", function() {
    let numbers = [1, 2, 3, 4, 5];
    const result = sum(numbers);
    expect(result).toBe(15);
  });

  // Pruebas para la función average
  it("average Debería devolver el promedio de 'numbers'", function() {
    let numbers = [1, 2, 3, 4, 5];
    const result = average(numbers);
    expect(result).toBe(3);
  });

  // Pruebas para la función biggestPrime
  it("biggestPrime Debería devolver el número primo más grande de 'numbers'", function() {
    const result = biggestPrime(100);
    expect(result).toBe(97);
  });

  // Pruebas para el objeto 'obj'
  it("Debería tener una propiedad 'name' con el valor correcto", function() {
    expect(obj.name).toBe("Jorge");
  });

  it("Debería tener una propiedad 'lastName' con el valor correcto", function() {
    expect(obj.lastName).toBe("Gonzalez");
  });

  it("Debería tener una propiedad 'birthYear' con el valor correcto", function() {
    expect(obj.birthYear).toBe(1995);
  });

  it("La función 'getFullName' debería devolver el nombre completo", function() {
    const fullName = obj.getFullName();
    expect(fullName).toBe("Jorge Gonzalez");
  });

  it("La función 'getBirthYear' debería devolver la edad", function() {
    const age = obj.getBirthYear();
    expect(age).toBe(28); // Ajusta este valor según tu año de nacimiento y el año actual
  });
});
