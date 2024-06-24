/**
 * ami toamke ekta string dibo tumi eitar modde even number ase or nai eita amke bole dibe...
 * 
 */

//ei bhabe amra ektastring er vetor koy songkha ase,,eita even na odd ei sokol kisu bahir korte pari..
function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
}

// evenSizedString('lawa');
// evenSizedString('Bawra');


function dodoubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
// console.log(dodoubleOrTriple(5, true));
// console.log(dodoubleOrTriple(5, false));


//array

function numberOfElement(numbers){
    const len = numbers.length;
    return len
}

// numberOfElement([25,36,4,5,7,8,52,3,5])


//object

function getperson(age){
    const person = age.person;
    return age;
}

const age = getperson(25); 