// //Contructor Overloading
// class Point {
//   x: number = 0;
//   y: number = 0;

//   // Constructor overloads
//   constructor(x: number, y: number);
//   constructor(xy: string);
//   constructor(x: string | number, y: number = 0) {
//     // Code logic here
//   }
// }

// class Base {
//   k = 4;
// }

// class Derived extends Base {
//   constructor() {
//     // Prints a wrong value in ES5; throws exception in ES6
//     //console.log(this.k);
//     //   'super' must be called before accessing 'this' in the constructor of a derived class.
//     super();
//     console.log(this.k);
//   }
// }

// class Thing {
//   _size = 0;

//   get size(): number {
//     return this._size;
//   }

//   set size(value: string | number | boolean) {
//     let num = Number(value);
//     if (!Number.isFinite(num)) {
//       this._size = 0;
//       return;
//     }

//     this._size = num;
//   }
// }

// /////////////////////////////////////////////
// interface A {
//     x: number;
//     y?: number;// as it is optional and can't used in Class C
//   }
// class C implements A {
//     x = 0;
//     // y
// }
// const c = new C();
// // c.y = 10;//throws error

// ///////////////////////////////////////////////

// // @errors: 7006
// interface Checkable {
//     check(name: string): boolean;
//   }

//   class NameChecker implements Checkable {
//     check(s) {// it have implicit type any
//       // Notice no error here
//       return s.toLowerCase() === "ok";
//       //         ^?
//     }
//   }

// const nameChecker = new NameChecker();
// // const newData = nameChecker.check(45);// error as it is not able to check the type as parameter

// ///////////////////////////////////////////////////

// class Base {
//     greet() {
//       console.log("Hello, world!");
//     }
//   }

//   class Derived extends Base {
//     // Make this parameter required
//     greet(name?: string, lastName?: string) {
//       if(name && lastName){
//       console.log(`Hello, ${name.toLocaleLowerCase()} ${lastName.toLocaleUpperCase()}`);

//       }
//       else{
//         super.greet()
//       }
//     }
//   }
//we can do overridding in typescript with make the parameter optionals

class Greeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}

class SpecialGreeter extends Greeter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}
const g = new SpecialGreeter();
g.greet(); // OK
//   g.getName();//error as datatype is protected

/////////////////////////////////////////////////////////

// class Params {
//     constructor(
//       public readonly x: number,
//       protected y: number,
//       private z: number
//     ) {
//       // No body necessary
//     }
//   }
//   const a = new Params(1, 2, 3);
//   console.log(a.x);
//   console.log(a.y);//cann't be accessable
//   console.log(a.z);//can't be accessable

///////////////////////////////////////////////////////////

abstract class Base {
  abstract getName(): string;
  printName() {}
}
abstract class Derived extends Base {}

class Derived2 extends Derived {
  getName() {
    return "";
  }
}

type NewType  = {
    name:string,
    age:number
}


const obj: NewType = {
    name:"Abhinav",
    age:30
}


