function loggerWrapper(func) {
    return function (num1, num2) {
        console.log("Calling function ".concat(func.name, " with arguments: ").concat(num1, " ").concat(num2));
        return func(num1, num2);
    };
}
var add = function (a, b) { return a + b; };
var loggedAdd = loggerWrapper(add);
var value = loggedAdd(3, 5);
console.log(value);
