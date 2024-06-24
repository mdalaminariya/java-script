//  fanction er nam likher por amra ek ba ekadik nam likhte pari first bracket er vetore ei take perametar bole..
//function er khetre amra bahir e kono kisu likhe oita output hisebe pabo na..

// function square (number){
//     console.log(number);
// }
// console.log('perametar number is', number);
// square(4);

//3----->3*3=9

function square (number){
   console.log('value of perametar number is', number);
   const square = number * number;
   console.log('square of the given number is :', square);
 }
square(4);

console.log('--------------');
square(12);

console.log('----------');
square(654);

// jodi  amra function use kore ek ba ekadik value er sum ba + dekhte chai sei khetre..

function add(num1 , num2){
    const sum = num1 + num2;
    console.log(sum);
}
console.log('---------------')
add(45 , 20);

//function er khetre amra jokhon totall man bahir korte jabo tokhon ekta value kom hole Nan dekhabe..

function AddAll(a,b,c,d,e,){
    const totall = a+b+c+d+e;
    console.log(totall);
}
console.log('--------');
AddAll(4,5,6,7);

function AddAll(a,b,c,d,e,){
    const totall = a+b+c+d+e;
    console.log(totall);
}
console.log('--------');
AddAll(4,5,6,7,8);