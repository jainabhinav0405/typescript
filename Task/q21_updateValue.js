function updateValuesWithPrefix(obj, prefix) {
    var updatedObj = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        var value = obj[key];
        if (typeof value === "string") {
            updatedObj[key] = prefix + value; // Add prefix to string
        }
        else if (typeof value === "object" && value !== null) {
            updatedObj[key] = updateValuesWithPrefix(value, prefix); // Recursively update nested objects
        }
        else {
            updatedObj[key] = value; // Leave other types unchanged
        }
    }
    return updatedObj; // Return the updated object
}
// Example usage
var obj = {
    name: "Alice",
    age: 30,
    address: {
        city: "Wonderland",
        zip: 12345,
        location: {
            country: "Fantasy",
        },
    },
    isActive: true,
};
var updatedObj = updateValuesWithPrefix(obj, "Hello, ");
console.log(updatedObj);
/*
Output:
{
  name: "Hello, Alice",
  age: 30,
  address: {
    city: "Hello, Wonderland",
    zip: 12345,
    location: {
      country: "Hello, Fantasy",
    },
  },
  isActive: true,
}
*/
