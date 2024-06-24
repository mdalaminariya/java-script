const sentence = 'I am learning Dev.'
//const result = '.Ved bew gninreal ma I';

// eitar maddome protiti word 1 line kore jayga dokhol korbe ba ektar por ekta kore nicher dike namte thakbe ba sob gulo alada alada thakbe ar purote ulte asbe.


//web
//bew
//donal
//d
//od
//nod
//anod
//lanod
//reverse er kaj hocche sentance take ultiye dekhabe.

let reverse = ''
for(const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
// console.log(reverse);

// eitar maddome sentence er moddde koyta songkha ase ta dekha jabe..
let rev = ''
for(let i = 0; i <sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);//eitar maddome amra dekhte parbo kon word koto number ase..
    const letter = sentence[i];
    rev = letter + rev

}
// console.log(rev)

//short cut
const reversed = sentence.split('').reverse().join('');//join er maddome sob gulo ke ek sathe niye asbe..ar''eitar maddome vitorer '', ei 2 take uthiye dibe..
console.log(reversed);
