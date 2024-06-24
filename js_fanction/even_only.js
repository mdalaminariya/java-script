/**
 * amake shudhu matro even ba jor number gulo daw..
 * amake even songkha gulor sum ba jogfol daw..
 */

function evenNumberOnly(numbers){
    const evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}
const numbers = [5,4,20,6,55,12,4,59]
// const evens = evenNumberOnly(numbers);
// console.log('even numbers are',evens);

//sum

function sumOfEvenNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}
// const sum = sumOfEvenNumber(numbers);
// console.log('sum numbers is', sum);

//odd

function sumOfoddNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 1 ){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}
const sum = sumOfoddNumber(numbers);
console.log('sum number is',sum);