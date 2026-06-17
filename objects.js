const hero = {
  name: "Luna the Brave",
  class: "Mage",
  level: 12,
  health: 85,
  mana: 120,
  isAlive: true,
};

const ranger = {
    name: "Lakshya the swift",
    agility: 80,
    stealth: undefined,
};
console.log("name" in ranger);
console.log("stealth" in ranger);
console.log("toString" in ranger); //this will also give true because in this it uses prototypal chaining to inherit values 

// for reliabilty we use hasOwnProperty 

console.log(ranger.hasOwnProperty("toString"));

// .hasOwnProperty()
// this mthods is used to check if an object has a specific proeperty as its own property
