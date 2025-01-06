var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function mergeUserPurchases(users, purchases, key) {
    var purchaseMap = {};
    purchases.forEach(function (purchase) {
        var userId = purchase.userId, rest = __rest(purchase, ["userId"]);
        if (!purchaseMap[userId]) {
            purchaseMap[userId] = [];
        }
        purchaseMap[userId].push(rest);
    });
    return users.map(function (user) { return (__assign(__assign({}, user), { purchases: purchaseMap[user.id] || [] })); });
}
var users = [
    { id: 1, name: "John Doe", email: "john@example.com", dob: '12-2-03' },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Jim Brown", email: "jim@example.com" },
];
var userReviews = [
    { userId: 1, review: "Not good", star: 1200 },
    { userId: 2, review: "Bad", star: 800 },
    { userId: 1, review: "Average", star: 20 },
    { userId: 3, review: "Excellent", star: 100 },
    { userId: 2, review: "Poor", star: 200 },
];
var purchases = [
    { userId: 1, item: "Laptop", price: 1200, category: 'cellphone' },
    { userId: 2, item: "Phone", price: 800 },
    { userId: 1, item: "Mouse", price: 20 },
    { userId: 3, item: "Keyboard", price: 100 },
    { userId: 2, item: "Monitor", price: 200 },
];
var mergedData = mergeUserPurchases(users, purchases, "purchase");
var mergedData2 = mergeUserPurchases(users, userReviews, 'review');
console.log(JSON.stringify(mergedData2, null, 2));
