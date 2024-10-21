function loggerWrapper(func: Function) {
    return function(num1:number,num2:number) {
        console.log(`Calling function ${func.name} with arguments: ${num1} ${num2}`);
        return func(num1,num2);
    };
}

const add = (a: number, b: number): number => a + b;
const loggedAdd = loggerWrapper(add);

const value = loggedAdd(3, 5);
console.log(value); 
