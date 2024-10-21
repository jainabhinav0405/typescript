function stringify(data) {
    if (typeof data === "string") {
        return "\"".concat(data, "\"");
    }
    else {
        return "\"".concat(data, "\"");
    }
}
console.log(stringify("hello"));
console.log(stringify(123));
