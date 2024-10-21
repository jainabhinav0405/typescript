interface Person{
    name: string,
    age: number
}

function printData(person:Person){
    console.log(`Name: ${person.name}, Age: ${person.age}`);
}

printData({name:"Abhinav",age:21});