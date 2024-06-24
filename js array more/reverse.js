//                   [1,2,3,4,5,6,7,8,9]
//                   [9,8,7,6,5,4,3,2,1]

const number = [1,2,3,4,5,6,7,8,9];

// console.log(number);

// const reversed = number.reverse();

// console.log(reversed);


const rev_number = [];

//push diye declare kora hole same tai dibe..er jonne unshift use korte hoy..
// for(num of number){
//     console.log(num);
//     rev_number.push(num);
// }
// console.log(rev_number);


// for(num of number){
//     console.log(num);
//     rev_number.unshift(num);
// }
// console.log(rev_number);


const reversed_number = [];
for(let i = 0; i < number.length; i++){
    const num = number[i];
    reversed_number.unshift(num);
}


//reverse side----> eitar mane hocche amra start korbo ulta dik theke..

const rev_rev_number = [];
for(let i = number.length - 1; i >= 0; i--){
    const num = number[i];
    console.log(i);
    rev_rev_number.push(num);
}
console.log(rev_rev_number);