// "strictPropertyInitialization": true,
//if this is active then we can't just initialize the type we needto assign the value using constuctor or directly 
// if we don't want to initialize the value directly or using constructor we must make the variable optional
class Point {
    a:number
    b:number
    c?:number// this will not create any error during the compilation
    constructor(a:number, b:number) {
        this.a = a
        this.b = b
    }
}
