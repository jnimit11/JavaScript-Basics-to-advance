// 3 types of loops for, while, do while

// for loop = use when we know how much times to loop

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// while loop = when we the know condition but dont know the No. of interations

let ip = 0;
let house = 50;
// while (ip != house) {
//   ip = ip + 1;
//   console.log("step taken", +ip);
// }

// do while
do {
  ip = ip + 1;
  console.log("step taken", +ip);
} while (ip <= house);
