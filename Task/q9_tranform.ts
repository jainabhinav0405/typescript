type User4 = {
  firstName: string;
  lastName: string;
  age: number;
};

const user4: User4 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
type NewReturnType<T extends User4, K extends Record<keyof K, string>> = {
  [key in keyof T as key extends keyof K ? K[key] : key]: T[key];
};

function transformKeys<T extends User4, V extends Record<keyof V, string>>(obj: T, updateObject: V){
  let result = {} as NewReturnType<T,V>;

  for (const key in obj) {
    if (key in updateObject) {
      const newKey = updateObject[key as string];
      result[newKey] = obj[key];
    } else {
      result[key as string] = obj[key];
    }
  }
  return result;
}


const transformUser = transformKeys(user4, { firstName: "first" , age: "umar"} as const);
type NewReturnFunctionType = typeof transformUser;

console.log(transformUser);