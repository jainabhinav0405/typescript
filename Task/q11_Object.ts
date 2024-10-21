function deepGet(obj:Object, sum:string = " ") {
        return Object.keys(obj).reduce((acc, key) => {
            const newKey = sum ? `${sum}.${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                Object.assign(acc, deepGet(obj[key], newKey));
            } else {
                acc[newKey] = obj[key];
            }
            return acc;
        }, {});
      }

// Example usage:
const obj = { foo: { bar: { baz: 'Hello' } } };
const value1 = deepGet(obj, 'foo.bar.baz'); // 'Hello'
