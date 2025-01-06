function deepMerge(obj1, obj2) {
    for (var key in obj2) {
        if (obj1.hasOwnProperty(key)) {
            if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                deepMerge(obj1[key], obj2[key]);
            }
            else {
                obj1[key] = obj2[key];
            }
        }
        else {
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}
var obj3 = { a: 1, b: { c: 2 } };
var obj4 = { b: { d: 3 }, e: 4 };
var merged = deepMerge(obj3, obj4);
console.log(merged);
var obj5 = { a: 1, b: { c: 2 } };
var obj6 = { b: { c: 'string' }, d: 4 };
var merged2 = deepMerge(obj5, obj6);
console.log(merged2);
