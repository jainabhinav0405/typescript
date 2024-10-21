//Parameters

/*
    Required Parameters
    function greet(name: string): void{
    console.log("Hello, " + name + "!");
}

greet("John");  // Output: Hello, John!
// greet();  // Error: Expected 1 argument, but got 0


*/

/*
 
    // Default Parameters 
    function greetDefault(name: string = "Guest") {
    console.log("Hello, " + name + "!");
}

greetDefault("John");  // Output: Hello, John!
greetDefault();        // Output: Hello, Guest! (default value used)



*/


/*
    function sum(...numbers: number[]): number {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3));  // Output: 6
console.log(sum(10, 20, 30, 40));  // Output: 100

*/

/*

    //Optional Parameters 
    function greetOptional(name: string, message?: string) {
    if (message === undefined) {
        message = "Hello";  // set default message if none provided
    }
    console.log(message + ", " + name + "!");
    }

    greetOptional("John");              // Output: Hello, John!
    greetOptional("Jane", "Welcome");   // Output: Welcome, Jane!


*/



    //Destructured Parameters
    function displayPerson({ name, age }: { name: string; age: number }) {
    console.log(name + " is " + age + " years old.");
    }

    const person = { name: "John", age: 30, Mob: 7248171733};
    displayPerson(person);  // Output: John is 30 years old.

// */

/*
    //Named Parameters
    function createUser({ name, age, city }: { name: string; age: number; city: string }) {
        console.log("Name: " + name + ", Age: " + age + ", City: " + city);
    }

    createUser({ name: "John", age: 30, city: "New York" });
    // Output: Name: John, Age: 30, City: New York

*/


