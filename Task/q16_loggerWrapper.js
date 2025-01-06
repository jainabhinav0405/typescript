function loggerWrapper(func) {
    return function () {
        console.log("Calling function ".concat(func.name, " with arguments: ").concat(arguments));
        return func(arguments);
    };
}
var add = function (a, b) { return a + b; };
var loggedAdd = loggerWrapper(add);
var value = loggedAdd();
console.log(value);
