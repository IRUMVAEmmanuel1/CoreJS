var items = [
    {
      itemName: "Banana",
      itemPrice: 100,
      tax: 1.2,
    },
    {
      itemName: "Mango",
      itemPrice: 100,
      discount: 1.2,
    },
    {
      itemName: "Banana",
      itemPrice: 100,
      discount: 1.2,
    },
    {
      itemName: "Banana",
      itemPrice: 100,
      discount: 1.2,
    },
  ];
  
  let array = [];
  
  for (let item of items) {
    array.push({ ...item, totaPrice: item.itemPrice * item.discount });
  }
  console.log(array);
  