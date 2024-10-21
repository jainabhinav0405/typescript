function deepGet(obj, path) {
    if (typeof path === 'string') {
        path = path.split('.'); // Convert dot notation to array
    }
    
    return path.reduce((acc, key) => {
        if (acc && key in acc) {
            return acc[key];
        }
        throw new Error(`Path '${path.join('.')}' does not exist in the object.`);
    }, obj);
}

// Example usage:
const obj = { foo: { bar: { baz: 'Hello' } } };
const value1 = deepGet(obj, 'foo.bar.baz'); // 'Hello'
const value2 = deepGet(obj, ['foo', 'bar', 'baz']); // 'Hello'
