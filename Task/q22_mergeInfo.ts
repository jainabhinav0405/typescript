type User = {
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
  
  function mergeUserPurchases<
    U extends User,
    P extends Purchase,
    K extends string
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
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Jim Brown", email: "jim@example.com" },
  ];
  
  const purchases = [
    { userId: 1, item: "Laptop", price: 1200 },
    { userId: 2, item: "Phone", price: 800 },
    { userId: 1, item: "Mouse", price: 20 },
    { userId: 3, item: "Keyboard", price: 100 },
    { userId: 2, item: "Monitor", price: 200 },
  ];
  
  const mergedData = mergeUserPurchases(users, purchases, 'purchase');
  
  console.log(JSON.stringify(mergedData, null, 2));
  