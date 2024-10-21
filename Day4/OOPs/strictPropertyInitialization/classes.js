// "strictPropertyInitialization": true,
//if this is active then we can't just initialize the type we needto assign the value using constuctor or directly 
// if we don't want to initialize the value directly or using constructor we must make the variable optional
var Point = /** @class */ (function () {
    function Point(a, b) {
        this.a = a;
        this.b = b;
    }
    return Point;
}());
