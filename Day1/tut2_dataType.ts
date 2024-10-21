/* 
    Data Type:
    1. Primitive 
        1. String 
            let str:string = "Abhinav";
        2. Number
            let num:number = 123;
        3. Boolean
            let bool: boolean  = false
        4. BigInt
            let bigNumber bigint =124225135213153463212654n;
        5. Symbols
            let uniqueKey: symbol = Symbol("key");
    
    2. Special Types
        1. Any
            let Any: any =4564; 
            Any = true
            //Any variable can be defined to the any datatype. it implicitly store the value.
        2. Unknown
            let UnknownValue:unknown =5;
            UnknownValue ="Abhinav";
            //Similar to any, but requires type-checking before performing any operations on the variable. It's a safer alternative to any.
        3. void 
            function logMessage(): void {
                console.log("This function returns nothing.");
            }
            //Used for function that doesn't return any value;          
        4. Never
            function throwError(message: string): never {
                 throw new Error(message);
            }
            //Used when it throwns an Error 

        5. null
            let Null:null = null
        6. undefined
            let Undefined: undefined = undefined

    3. Reference Type:
        1. Arrays: 
            a. Simple
                let numbers: number[] = [1, 2, 3];
            b. generic
                let mixed: Array<number | string> = [1, "apple", 2, "banana"];
            c. tuple
                let person: [string, number] = ["John", 25];

        2. Objects
            let person: { name: string; age: number } = {
                name: "Alice",
                age: 30,
            };
        3. Functions 
            function add(a: number, b: number): number {
                return a + b;
            };

    4. Union and Intersection Types
        1. Union Type:
            let id: number | string;
            id = 123;      // valid
            id = "ABC123"; // valid

        2. Intersection Type:
            interface Person {
                name: string;
                age: number;
            }

            interface Employee {
                employeeId: number;
            }

            let john: Person & Employee = {
                name: "John",
                age: 30,
                employeeId: 1234,
            };
            
    5. Literals Types
        let direction: "north" | "south" | "east" | "west";
            direction = "north"; // valid
            // direction = "up"; // Error! Invalid value

    6. Enum
        enum Direction {
            North,
            South,
            East,
            West,
        }

        let dir: Direction = Direction.North;
    
    7. Type Alias 
        type Point = {
            x: number;
            y: number;
        };

        let point: Point = { x: 10, y: 20 };

*/

let str:string= "Abhinav"
console.log(str)
