function deepGet(obj:Object, prefix:string = " ") {
        return Object.keys(obj).reduce((acc, key) => {
            const newKey = prefix ? `${prefix}.${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null ) {
                Object.assign(acc, deepGet(obj[key], key));
            } else {
                acc[newKey] = obj[key];
            }
            return acc;
        }, {});
      }

const obj = { foo: { bar: { baz: 'Hello' } } };
const value1 = deepGet(obj, 'foo.bar.baz');
console.log(value1);
