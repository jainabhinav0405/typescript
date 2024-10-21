/*
Mapped Types

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};
type Features = {
    darkMode: () => void;
    newUserProfile: () => void;
};
  
type FeatureOptions = OptionsFlags<Features>;

*/

/*
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;


const user:UnlockedAccount = {id:"A",name:"ABhinav"};
user.id = "as";
console.log(user);
*/


/*
// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
 
type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};
 
type User = Concrete<MaybeUser>;
*/



//Getter and Setter
/*
type Getters<Type> = {
    [Property in keyof Type as `get${string & Property}`]: () => Type[Property]
};
type Setters<Type> = {
    [Property in keyof Type as `set${string & Property}`]: (data:Type[Property]) => void
};

interface Person {
    name: string;
    age: number;
    location: string;
}

type GetPerson = Getters<Person>;
type SetPerson = Setters<Person>;

const User:Person={
     name:"",
     age:0,
     location:""
}
const user: GetPerson | SetPerson= {
    getname:()=>{}

    // setname:(data)=>{
    //     User.name = data;
    // },
    // setage:(data)=>{
    //     User.age =data;
    // },
    // setlocation:(data)=>{
    //     User.location= data;
    // }
};

*/