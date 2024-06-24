// odd number / bejor songkha..

// for(let i = 0; i <= 20; i++){

//     if(i % 2 === 1){
//         console.log(i);
//     }
// }
// another way
// for(let i = 0; i <= 20; i++){

//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// even number

// for(let i =0; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

//another way

// for(let i =0; i <= 20; i++){
//     if(i % 2 !== 1){
//         console.log(i);
//     }
// }


//give me the last number 1 to 30 divisible by 5

// for(let i = 1; i <= 30; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

// for(let i = 1; i <= 30; i++){
//     if(i % 3 === 0 || i % 5 ===0){
//         console.log(i);
//     }
// }

// for(let i = 1; i <= 30; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }

//give me the sum of numbers from 1 to 20 that are divisiable by 3

// let total = 0
// for(let i = 0; i <= 20; i++){
//     if(i % 3 ===0){
//         total = total + i
//         console.log(i);
//         console.log('total', total);
//     }
// }
// console.log('odd number from 1 to 20 total is', total);

let total = 0;
for(let i = 0; i <= 50; i++){
    if(i % 3 === 0){
        total = total + i;
        console.log(i);
        console.log('total', total);
    }
}
console.log('The total is', total);