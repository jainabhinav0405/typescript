// const user = {
//     firstName: "Tony",
//     lastName: "Stark",
//     age: 54,
// }
// type User = {
//     firstName: string,
//     lastName: string,
//     age: number,
// }


// function transformKeys<T extends User,U>(obj: T, [key in keyof U] ) {

//         return T;

// }
// const transformUser = transformKeys(user, { firstName: 'first', lastName: 'last' })