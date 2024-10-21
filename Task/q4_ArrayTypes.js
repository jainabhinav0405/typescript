function doubleValue(data) {
    return data.map(function (value) { return value * 2; });
}
var numbers = [1, 2, 3, 4, 5];
console.log(doubleValue(numbers));
