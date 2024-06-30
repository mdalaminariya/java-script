let a = 5;
let b = 7;
console.log(a, b);
// a = b;
// b = a;

//eitar maddome amra value er place ba jayga paltate ba odol-bodol korte ba change korte pari..
const temp = a;
a = b;
b = temp;
console.log(a, b);

// -------------------onno niom-------------------

//ei maddome x er ta y er sathe and y er ta x er sathe jayga change korese..
let x = 1;
let y = 18;

console.log(x , y);
[x , y] = [y, x];
console.log(x, y);