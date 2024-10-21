const user3 = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54,
  };
  
  ;
  function transformKeys<T extends object, U extends Partial<T>>(obj: T, updateObject: U) {
      for (let key in obj) {
          if (updateObject.hasOwnProperty(key)) {
              const newKey = updateObject[key] as keyof T;
              obj[newKey] = obj[key];
              delete obj[key];
          }
      }
      return obj;
  }
  const transformUser = transformKeys(user3, { firstName:"first",lastName:"last" });
  console.log(transformUser); 
  type NewTransformerUser = ReturnType<typeof transformKeys>;
  