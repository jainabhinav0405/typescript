interface User2 {
    age: number;
    name: string;
    address:{
        street:string;
        city:string;
    }
}

type NullabelProperties<T> = {
    [K in keyof T]:K extends Object?
    NullabelProperties<T[K] | null > :
    T[K] | null ;
    
}

type  DefinationExample = NullabelProperties<User2>;

const user2:DefinationExample= {
    name:"",
    age:null,
    address:{
        street:"string",
        city:"agra"
    }
}
