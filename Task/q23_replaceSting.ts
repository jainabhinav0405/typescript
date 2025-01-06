function replaceKeysAndConvertString<T>(obj: T){
   if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).reduce((acc, key) => {
      const newKey = key.includes('Id') ? key.replace('Id', 'Identifier') : key;
      const value = replaceKeysAndConvertString(obj[key]);
      if (typeof value === 'string') {
        acc[newKey] = value.toUpperCase();
      } else {
        acc[newKey] = value;
      }
      return acc;
    }, {});
  } else if (typeof obj === 'string') {
    return obj.toUpperCase();
  } else {
    return obj;
  }
}



const userData = {
    userId: "john_doe",
    details: {
      addressId: "abc123",
      name: "John",
      attributes: {
        itemId: "xyz456",
        info: "Some info here",
      },
    },
    items: [
      {
        productId: "p123",
        description: "a product",
      },
      "just a string",
    ],
  };
const newUserData = replaceKeysAndConvertString(userData);
console.log(newUserData)