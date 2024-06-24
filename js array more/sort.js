const person = ['fuckha', 'muri', 'rat', 'adad', 'morich', 'Akam', 'Bal'];

//sort mane hoche sajano..ar javascript onekta string er moton kaj kore..sort eita thik moton kaj kore na eitake system korte hoy.

const sortedPerson = person.sort();
console.log(sortedPerson);

//sort-------> eita 2  bhabe kora jay..

// const numbers = [4,2,3,6,5,8,7,9]

/**
 * Ascending-------> smaller to larger bhabe sajano..[2,3,4,5,6,7,8,9]
 * Descending-------> larger to smaller bhabe sajano..[9,8,7,6,5,4,3,2]
 */

const numbers = [4,2,31,6,55,8,87,9,1]
// const num_asc = numbers.sort(); //not working
// console.log(num_asc);


//ignore
const num_asc = numbers.sort(function(a,b) {return a - b});
const num_dsc = numbers.sort(function(a,b) {return b - a});
console.log(num_asc);