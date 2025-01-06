/////////////////////////////////////////////


// function loggingIdentity<T>(arg: Array<T>): Array<T> {
//     console.log(arg.length); // Array has a .length, so no more error
//     return arg;
// }


//////////////////////////////////////////////

// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//     return x + y;
// };

//////////////////////////////////////////////

// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }
 
// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "";
// stringNumeric.add = function (x, y) {
//   return x + y;
// };
 
// console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

/////////////////////////////////////////////////////////
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key];
//   }
   
//   let x = { a: 1, b: 2, c: 3, d: 4 };
   
//   getProperty(x, "a");
//   getProperty(x, "m");//error



///////////////////////////////////////////////////////////

// interface Lengthwise {
//   length: number;
// }
 
// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//   console.log(arg.length); // Now we know it has a .length property, so no more error
//   return arg;
// }


///////////////////////////////////////////////////////////////


// class Student {  
//   id: number;  
//   name: string;  

//   constructor(id:number,  name:string) {   
//       this.Id = id;  
//       this.Name = name;  
//   }  
// }  
//
// function display<T extends Student>(per: T): void {  
//   console.log(`${ per.Id} ${per.Name}` );  
// }  
// var st = new Student(101, "\nVirat Kohli");  
// display(st);  