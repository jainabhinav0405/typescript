// //Contructor Overloading
// class Point {
//   x: number = 0;
//   y: number = 0;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        console.log("Hello, " + this.getName());
    };
    Greeter.prototype.getName = function () {
        return "hi";
    };
    return Greeter;
}());
var SpecialGreeter = /** @class */ (function (_super) {
    __extends(SpecialGreeter, _super);
    function SpecialGreeter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpecialGreeter.prototype.howdy = function () {
        // OK to access protected member here
        console.log("Howdy, " + this.getName());
    };
    return SpecialGreeter;
}(Greeter));
var g = new SpecialGreeter();
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
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.printName = function () { };
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Derived;
}(Base));
var Derived2 = /** @class */ (function (_super) {
    __extends(Derived2, _super);
    function Derived2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived2.prototype.getName = function () {
        return "";
    };
    return Derived2;
}(Derived));
