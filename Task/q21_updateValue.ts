function updateValuesWithPrefix<T extends object>(obj: T, prefix: string): T {
    const updatedObj: any = {};
  
    for (const key in obj) {
      
        const value = obj[key];
  
        if (typeof value === "string") {
          updatedObj[key] = prefix + value; 
        } else if (typeof value === "object" && value !== null) {
          updatedObj[key] = updateValuesWithPrefix(value, prefix); 
        } else {
          updatedObj[key] = value;
        }
      
    }
  
    return updatedObj as T;
  }
  
  const obj = {
    name: "Alice",
    age: 30,
    address: {
      city: "Wonderland",
      zip: 12345,
      location: {
        country: "Fantasy",
      },
    },
    isActive: true,
  };
  

  const updatedObj = updateValuesWithPrefix(obj, "Hello, ");
  
  console.log(updatedObj);
  

  