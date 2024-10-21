function mapObject<T extends Record<string, any>, U>(
    obj: T,
    callback: any
  ){
    const result = {} as { [K in keyof T]: U };
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = callback(obj[key], key); 
      }
    }
  
    return result;
  }
  
  const originalObject = { a: 1, b: 2, c: 3 };
  const mappedObject = mapObject(originalObject, (value) => value.toString());
  
  console.log(mappedObject);
  