// 3 states of promises => Pending, fulfilled, rejected

function prepareOrder(dish) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!dish) {
        reject(new Error("No dish is here!"));
      }
      console.log(`${dish} is ready`);
      resolve({ dish, status: "prepared" });
    }, 100);
  });
}

function pickupOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${order} is picked up`);
      resolve({ order, status: "picked-up" });
    }, 100);
  });
}

function deliverOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${order} is delivered`);
      resolve({ order, status: "delivered" });
    }, 100);
  });
}

prepareOrder("Idli-Sambhar")
  .then(pickupOrder("Idli-Sambhar"))
  .then(deliverOrder("Idli-Sambhar"));
