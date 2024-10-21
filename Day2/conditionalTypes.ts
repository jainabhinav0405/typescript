/*
type SomeTypes = boolean;
type MyCondition1 = SomeTypes extends string?string : number;
type MyCondition2 = SomeTypes extends string?string : SomeTypes extends number?number:boolean;


//Exclude 
//type exclude<T,U> = T extends U? never :  T;
type ExcludeType = Exclude<"a"|"b"|"c","a"|"b">;//result c

// type extract<T,U> = T extends U? U :never
type ExtractType = Extract<"a"|"b"|"c","a">


type NonNullableType<T> = NonNullable<number|string |null |undefined >;
type nonnullable<T> = T extends null|undefined ?never : T;

let trys:nonnullable<number|undefined>;
*/

/*
//type Array using interface
type ExtractIdType<T extends {id: string | number}> = T["id"]

interface NumericId {
    id: number
}

interface StringId {
    id: string
}

interface BooleanId {
    id: boolean
}

type NumericIdType = ExtractIdType<NumericId> // type NumericIdType = number
type StringIdType = ExtractIdType<StringId> // type StringIdType = string
// type BooleanIdType = ExtractIdType<BooleanId> // won't work


type ToStringArray<T> = [T] extends [string] ? T[] : never

let a:ToStringArray<"Abhinav">;

*/

/**
    
    type Person = { age: number; name: string; alive: boolean };
    type Age = Person["age"];

    Index Access Types

    type I1 = Person["age" | "name"];
     
    type I1 = string | number
    
    type I2 = Person[keyof Person];
        
    type I2 = string | number | boolean
    
    type AliveOrName = "alive" | "name";
    type I3 = Person[AliveOrName];

 */