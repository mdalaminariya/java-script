// jokhon amra ekta number and oporta string diye thaki tokhon type of chack korar niom eita..
//ei khane mulote amra string , number , object jodi na dewa hoy sei khetre dhore dite parbo..

function multyply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please provide a number';
    }
    const multi = num1 * num2;
    return multi;
}

const result = multyply(5, 'seven');
// console.log(result);

//string
function fullName(first, second){
    if(typeof first !== 'string'){
        return 'frist name should be a string'
    }
    else if(typeof second !== 'string'){
        return 'second name should be a sting'
    }
    const full = first + '' + second;
   
}

const full = fullName('akmal', 7);
// console.log(full);


function getPrice(product){
    if(typeof product !== 'object'){
        return 'please provide an object'
    }
    const price = product.price;
    return price;
}

//const price = getPrice({name: 'chulakanir molom,', price: 35, color: 'white'});

const price = getPrice(35);
// console.log(price);


//array
//java script e array o ek doroner object..

function getSecond(numbers){
    // console.log(typeof numbers);

//array check korar niom eita..jodi sotti hoy tahole true dekhabe or mittha hole false dekhabe..
    if(Array.isArray(numbers) === false){
    return 'please provide an array';
    }
    const second = numbers[1];
    return second;
}

const second = getSecond([45, 61, 55]);
// console.log(second);