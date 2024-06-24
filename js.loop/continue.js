// continue---->Skip rest the code for this iteration..
// break------->I am done this loop.loop end.

// for(let i = 1; i < 10; i++){
//         if(i % 2 === 1){
//             continue; //eitar maddome jei number  ta dekhte chai oi number baki sob number skip korbe..
//         }
//         console.log(i);
// }


let n = 0;
// while er khetre continue jukto condition dewar somoy n++ ta fist e use kora hoy..
while(n < 15){
    n++;
    if(n % 5 !== 0){
        continue;
    }
    console.log(n);
}