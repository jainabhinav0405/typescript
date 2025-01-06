function updateObject<Type, Key extends keyof Type>(
    obj: Type,
    key:    Key,
    value: Type[Key]
) {
    obj[key] = value;
    return obj;
}

const obj2 = { a: 1, b: 'hello',   c: true };

const updated = updateObject(obj2,"c",true);

console.log(updated);



