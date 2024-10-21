/*
function greeter(fn: (a: string) => void) {
    fn("Hello, World");
  }
   
  function printToConsole(s: string) {
    console.log(s);
  }
   
  greeter(printToConsole);

*/
// type DescribableFunction = {
//   description: string;
//   (someArg: number): boolean;
// };
// function doSomething(fn: DescribableFunction) {
//   console.log(fn.description + " returned " + fn(6));
// }
// function myFunc(someArg: number) {
//   return someArg > 3;
// }
// myFunc.description = "default description";
// doSomething(myFunc);
function typeAssign(arr) {
    return arr;
}
var arr = typeAssign([""]); // TypeScript infers T as string
arr.push("a");
arr.push("a");
arr.push("a");
console.log(arr); // Output: [""]
// export {}
