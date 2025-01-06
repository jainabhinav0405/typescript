class Dog {}
class Cat {}

function isDog<T>(value: T): boolean{
  return value instanceof Dog;
}

function filterDogs(array: (Dog|Cat)[]){
  return array.filter(array => isDog(array));
}

const animals = [new Dog(), new Cat(), new Dog()];
const fil = filterDogs(animals)
console.log();