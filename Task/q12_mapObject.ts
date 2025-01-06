function mapObject<T extends Record<string, any>, U extends Function>(
    obj: T,
    callback: U
  ){
    const result = {} as { [K in keyof T]: U };
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = callback(obj[key]); 
      }
    }
  
    return result;
  }
  
  const originalObject = { a: 1, b: 2, c: 3 };
  const mappedObject = mapObject(originalObject, (value) => value.toString());
  
  console.log(mappedObject);
  