var response1 = {
    data: 42,
    status: "success",
    message: "Operation completed successfully."
};
var response2 = {
    data: "An error occurred.",
    status: "error",
    message: "Failed to fetch data.",
    additionalInfo: "Network issue."
};
console.log(response1, response2);
