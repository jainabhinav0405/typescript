function stringify(data:string|number){
    if(typeof data === "string"){
        return `"${data}"`;
    }
    else{
        return `"${data}"`;
    }
}
console.log(stringify("hello"));
console.log(stringify(123));