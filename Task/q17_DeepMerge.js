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
var obj1 = { a: 1, b: { c: 2 } };
var obj2 = { b: { d: 3 }, e: 4 };
var merged = deepMerge(obj1, obj2);
console.log(merged);
var obj3 = { a: 1, b: { c: 2 } };
var obj4 = { b: { c: 'string' }, d: 4 }; // This will cause a type error
var merged2 = deepMerge(obj3, obj4); // Type error if obj3.b.c and obj4.b.c are not the same primitive type
console.log(merged2);
