// interface ForFunc {
//     (key: string, value?: string): void;
// }

// function printInfo(key: string, value?: string): void {
//     console.log(`${key} for ${value}`);
// }

// const  newFunc: ForFunc = printInfo;
// newFunc("Interface", "Function");


////////////////////////////////////////////////////////////////////
//Optional Parameters

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({ width:200});

// console.log(mySquare);

////////////////////////////////////////////////////////////////////


// interface Point {
//     readonly x: number;
//     readonly y: number;
//   }
  
//   let p1: Point = { x: 10, y: 20 };
//   // p1.x = 5; // error!
  
  
//   ////////////////////////////////////////////////////////////////////





//   //Interface with classes
//   interface UserData{
    //       readonly name:string,
    //       age?:number
    //   }
    
    //   type UserData2={
        //       name1:string,
        //       age1?:number
        //   }
        //   //Interface in class used the property not the behavior of the property
        //   class User implements UserData{
            
        //       name:string
        //       age?:number
        //       constructor(name:string,age?:number){
            //           this.name = name;
            //           this.age = age;
            //       }
            //   }
            
            
            //   const user = new User("Abhinav");
            //   // user.name1 = "Ayush" 
            //   console.log(user.age);
            
            
            
 //   ////////////////////////////////////////////////////////////////////
 
 
 //  interface SearchFunc {
    //     (source: string, subString: string): boolean;
    //   }
    //   let mySearch: SearchFunc;
    
    //   mySearch = function (src, sub) {
        //     let result = src.search(sub);
        //     return result > -1;
        //   };


////////////////////////////////////////////////////////////////////


// interface HeadersResponse {
    //     "content-type": string,
    //     date: string,
    //     "content-length": string
    
    //     // Permit any property starting with 'x-'.
    //     [headerName: `x-${string}`]: string;
    //   }
    
    //   function handleResponse(r: HeadersResponse) {
        //     // Handle known, and x- prefixed
        //     const type = r["content-type"]
        //     const poweredBy = r["x-powered-by"]
        
        //   }
        
        
        
        
////////////////////////////////////////////////////////////////////



// interface Shape {
//     color: string;
// }

// interface Square extends Shape {
//     sideLength: number;
// }

// let square = {} as Square;
// square.color = "blue";
// square.sideLength = 10;



////////////////////////////////////////////////////////////////////


class User{
    private name="kjm";
    age=12;
    printName=()=>{
        console.log(this.name);
    }
}

interface assd extends User{
    system:string;
}

// const value: assd={
//     name:"ayush",
//     age:13,
//     system:"windows",
//     printName: ()=> {
//     },
// }


class asd extends User implements assd{
    age =12;
    system = "windows";
    printName=()=>{
        console.log();
    }
}