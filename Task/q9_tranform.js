var user4 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
function transformKeys(obj, updateObject) {
    var result = {};
    for (var key in obj) {
        if (key in updateObject) {
            var newKey = updateObject[key];
            result[newKey] = obj[key];
        }
        else {
            result[key] = obj[key];
        }
    }
    return result;
}
var transformUser = transformKeys(user4, { firstName: "first", lastName: "last" });
// type NewReturnFunctionType = typeof transformUser;
// const arr:NewReturnFunctionType = {
//   age:45,
//   first:"",
//   last:""
// }
console.log(transformUser);
