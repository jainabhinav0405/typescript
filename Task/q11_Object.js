function deepGet(obj, prefix) {
    if (prefix === void 0) { prefix = " "; }
    return Object.keys(obj).reduce(function (acc, key) {
        var newKey = prefix ? "".concat(prefix, ".").concat(key) : key;
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            Object.assign(acc, deepGet(obj[key], key));
        }
        else {
            acc[newKey] = obj[key];
        }
        return acc;
    }, {});
}
// Example usage:
var obj = { foo: { bar: { baz: 'Hello' } } };
var value1 = deepGet(obj, 'foo.bar.baz');
console.log(value1);
