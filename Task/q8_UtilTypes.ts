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
        street:null,
        city:"agra"
    }
}


type UserType = {
    USER : 'user',
    ADMIN : 'admin',
    COMPANY: 'company'

}

type UserTypeDefinition<T extends UserType> = {
    [key in keyof T]: key extends T[key] ? never : T[key]
}

const arr:UserTypeDefinition<UserType>={
    USER:"user",
    ADMIN:"admin",
    COMPANY:"company"
}