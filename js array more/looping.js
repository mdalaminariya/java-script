/**
 * Looping Tecnique
 * 1.for loop
 * 2.while loop
 * 3.do-while lopp-----> eita amra beshi use korbo na..
 * 4.for of--->array declare korar jonne use kora hoy..
 * 5.for in---->object declare korar jonne use kora hoy..
 */


const friends = ['elephent', 'panda', 'tiger', 'cat'];

for(friend of friends){
    // console.log(friend);
}

//ei bhabe korar fole jei value ba uapadan joto number e ase oita songkha soho show korbe..
for(let i = 0 ; i < friends.length; i++)//eitar maddome joto gulo value ase sei porjonto count kore then theme jabe..
    {
    // console.log(i);
    // console.log(friends[i]);
}

const numbers = [2,3,5,1,4,45,5989,456,125,25,34,55];
for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
}

//while

let i = 0;
while(i < friends.length){
    // console.log(friends[i]);
    i++;
}

let n = 0;
while(n < numbers.length){
    console.log(numbers[n]);
    n++;
}