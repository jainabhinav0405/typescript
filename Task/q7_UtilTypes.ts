interface User {
    age?: number;
    name: string | null;
    address:{
        street:string|null;
        city:string|null;
    }
}

type DefinedProperties<T> = {
    [K in keyof T]:T[K] extends Object?
    DefinedProperties<T[K]> :
    Exclude<T[K], null | undefined>;
}

type DefineExample = DefinedProperties<User>;

const user: DefineExample = {
    name:"",
    address:{
        street:"",
        city:"agra"
    }
}