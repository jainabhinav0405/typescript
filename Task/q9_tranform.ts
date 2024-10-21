const user2 = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54,
  };
  
  type User2 = {
    firstName: string;
    lastName: string;
    age: number;
  };
  const transformKeys = (object: User2, updateObject: Partial<User2>) => {
    

  };
  const transformUser = transformKeys(user2, { age: 9, firstName: "rites" });
  console.log(transformUser); 
  

  