// - Record
// It is Simmilar as Index Signature
// it is generally used to assign the type of Key value Pair
//manual
// type RecordType = {
//     [key: string]: string|number
// }
// type RecordType  = Record<string, string|number>;
// const record: RecordType = {
//     age:45,
//     name:"Abhinva",
//     45:123,//here 45 is treated as string
//     // isActive: true //throws an error as it is only allow as string|number in the value
//     // address:{    }// error object is also not allowed
// }
// - Partial
// create all the object optional
// type PartialType = {
//     name: string;
//     age: number,
//     address:{
//         street: string,
//         city: string
//     },
//     email:string,
//     phoneNumber:number
// }
//Manual Partial
// type ManualPartial<T> = {
//     [P in keyof T]?: T[P];
// };
// type PartialTypeOptional = ManualPartial<PartialType>;
// const partial:Partial<PartialType> = {
//     name:"Abhinav"
// }
// - Required
//Required make all the attributr required and optional attributes are converted to required attribute
// type RequiredType = {
//     name?: string;
//     age?: number,
//     address?:{
//         street: string,
//         city: string
//     },
//     email?:string,
//     phoneNumber?:number
// }
// type ManualRequired<T> = {
//     [P in keyof T]-?: T[P];
// };
// type RequiredTypeRequire = ManualRequired<RequiredType>;
// const required: Required<RequiredType> = {
//     name:"Abhinav",
//     age:21,
//     address:{
//         city:"agra",
//         street:"abc"
//     },
//     email:"abhinav@gmail.com",
//     phoneNumber:1234567890
// }
// - Omit
// Use all types except given type
// type OmitType = {
//   name: string;
//   age: number;
//   address: {
//     street: string;
//     city: string;
//   };
//   email: string;
//   phoneNumber: number;
// };
// type ManualOmit<T, U> = {
//   [P in keyof T as P extends U ? never : P]: T[P];
// };
// type OmitTypeUmit = ManualOmit<OmitType, "address" | "email">;
// const omit: Omit<OmitType, "address" | "email"> = {
//   age: 12,
//   name: "Abhinav",
//   phoneNumber: 9874563210,
// };
// - Pick
// Pick is uesd to extect all the main type from the given type
// type PickType = {
//   name: string;
//   age: number;
//   address: {
//     street: string;
//     city: string;
//   };
//   email: string;
//   phoneNumber: number;
// };
// type ManualPickType<T, U> = {
//   [P in keyof T as P extends U ? P : never]: T[P];
// };
// type PickTypeManual  = ManualPickType<PickType, "name"|"age">
// const pick: PickTypeManual = {
//   name: "Abhiav",
//   age: 21,
// //   email:"abhinav@gmail.com", //throws error
// };
// const pick: Pick<PickType, "name" | "age"> = {
//   name: "Abhiav",
//   age: 21,
//   // email:"abhinav@gmail.com", throws error
// };
// - NonNullable
//the value can't be null| undefined
// type T0 = NonNullable<string | number | undefined | null>;
// //can't works on the object and interface type
// interface T1 {
//   name: string;
//   age: null;
//   email: null;
//   phoneNumber: number;
// }
// type ManualNonNullable<T> = {
//     [P in keyof T as T[P] extends null? never : P]: T[P];
// } 
// type NonNullableT1 = ManualNonNullable<T1>;
// const t1: NonNullableT1 = {
//   name: "Abhinav",
// //   age: null,// this is make the non nullable objects
// //   email: null,
//   phoneNumber: 1234567890,
// };
// console.log(t1);


//ParameterType 
// this help to extract the type of parameter from the functions 
// type MyFunction = (a: string, b: number) => void;
// type Params = Parameters<MyFunction>;  // [string, number]
// const parameterType:Params = ["Abhinav",45]
//ConstructorType 
// It is simmilar to ParamType but extract type from the Constructor 
// class Person {
//     constructor(public name: string, public age: number) {}
// }
// type PersonConstructorParams = ConstructorParameters<typeof Person>;
// const params: PersonConstructorParams = ['Alice', 30];
// console.log(params);
// console.log(typeof Person);


//Return Type
// ReturnType<Type> is a utility type in TypeScript that allows you to extract the return type of a given function type
// function createUser(name: string, age: number) {
//     return {
//         name,
//         age,
//     };
// }
// // Extracting the return type
// type UserType = ReturnType<typeof createUser>;



//InstanceType 
// return the type of the class instance
// class Person {
//     constructor(public name: string, public age: number) {}
// }
// // Use InstanceType to extract the instance type of the Person class
// type PersonInstance = InstanceType<typeof Person>;
// // Now PersonInstance is inferred as Person
// const person: PersonInstance = new Person('Alice', 30);
// console.log(person.name); // Output: Alice
// console.log(person.age);  // Output: 30

//Exclude 
// it is much simillar as Omit Type 
//Extract
// it is much similar as Pick Type 
