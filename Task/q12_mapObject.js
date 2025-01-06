function mapObject(obj, callback) {
    var result = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = callback(obj[key]);
        }
    }
    return result;
}
var originalObject = { a: 1, b: 2, c: 3 };
var mappedObject = mapObject(originalObject, function (value) { return value.toString(); });
console.log(mappedObject);
