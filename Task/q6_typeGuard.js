var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    return Cat;
}());
function isDog(value) {
    return value instanceof Dog;
}
function filterDogs(array) {
    return array.filter(function (array) { return isDog(array); });
}
var animals = [new Dog(), new Cat(), new Dog()];
console.log(filterDogs(animals));
