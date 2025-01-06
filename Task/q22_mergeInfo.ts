type User1 = {
    id: number;
    name: string;
    email: string;
    [key: string]: any; 
  };
  
  type Purchase = {
    userId: number;
    item: string;
    price: number;
    [key: string]: any; 
  }
  
  type Reviews = {
    userId: number;
    review: string;
    star: number
    [key: string]: any; 
  }
  
  function mergeUserPurchases<
    U extends User1,
    P extends Purchase | Reviews,
    K extends P extends Purchase? "purchase" : "review"

  >(users: U[], purchases: P[], key: K) {
    const purchaseMap={};
    purchases.forEach(purchase => {
      const { userId, ...rest } = purchase;
      if (!purchaseMap[userId]) {
        purchaseMap[userId] = []; 
      }
      purchaseMap[userId].push(rest); 
    });
  
    return users.map(user => ({
      ...user,
      purchases: purchaseMap[user.id] || [], 
    }));
  }
  
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" , dob:'12-2-03' },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Jim Brown", email: "jim@example.com" },
  ];
  const userReviews = [
    { userId: 1, review: "Not good", star: 1200 },
    { userId: 2, review: "Bad", star: 800 },
    { userId: 1, review: "Average", star: 20 },
    { userId: 3, review: "Excellent", star: 100 },
    { userId: 2, review: "Poor", star: 200 },
  ];
  const purchases = [
    { userId: 1, item: "Laptop", price: 1200, category:'cellphone' },
    { userId: 2, item: "Phone", price: 800 },
    { userId: 1, item: "Mouse", price: 20 },
    { userId: 3, item: "Keyboard", price: 100 },
    { userId: 2, item: "Monitor", price: 200 },
  ];
  
  const comments = [{
    userId: 1,
    comment: "This is a great purchase!",
    rating: 4.5,
    date: "2022-01-01",
  }]

  const mergedData = mergeUserPurchases(users, purchases, "purchase");
  const mergedData2 = mergeUserPurchases(users, userReviews, 'review');
  
  console.log(JSON.stringify(mergedData2, null, 2));
  