// Array methods in JavaScript are built-in functions that allow you to manipulate and work with arrays. These methods can be used to perform various operations.

const orders = [
    { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
    { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
    { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
    { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
    { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
];

const mydata = orders.forEach((order, index) => {
    console.log(` #${index + 1} : ${order.qty} x ${order.dish}`);
});
// console.log(mydata);

const recieptLines = orders.map((o) => `${o.dish}: $${o.price * o.qty}`);
console.log(recieptLines);

// Some Interactive Array Methods in JavaScript:
forEach()
map()
reduce()
filter()
