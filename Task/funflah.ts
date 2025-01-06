type Flag = "yes"|"no" | boolean;
type Type1 = "yes" | "no";

function funflag<T extends boolean,V extends T extends true? Type1 : boolean>(funObj : T, funValue:V){
    
}

// funflag(true,)