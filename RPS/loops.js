let x = 0;
let y = "0";
console.log(y == x);
console.log(typeof x);
console.log(typeof y);
console.log(x + y);
console.log(typeof (x + y));

let p1 = { name: "Gavin" };
let p2 = p1;
p2.name = "Sapir";
console.log(p1);
console.log(p1 === p2);
