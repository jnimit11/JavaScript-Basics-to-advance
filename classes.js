// classes are template for creating objects.

class Cricketer {
  constructor(name, role) {
    ((this.name = name),
      (this.role = role),
      (this.matchesPalyed = 0),
      (this.stamina = 100));
  }

  introduce() {
    return `${this.name} | ${this.role} | matchesPlayed ${this.matchesPalyed} | stamina ${this.stamina}`;
  }
}

const player1 = new Cricketer("Virat", "Batsman");
const player2 = new Cricketer("Bumrah", "Bowler");

//  console.log(player1.hasOwnProperty("name"));
//  console.log(typeof Cricketer);

console.log(player1.introduce());
console.log(player2.introduce());
