type User3 = {
    id: number;
    name: string;
  };
  
  const user5 = {
    id: 1,
    name: "Alice",

  } satisfies User3; 
  console.log(user5);
  

let x: unknown = 'hello';
console.log((x as string).length);
  