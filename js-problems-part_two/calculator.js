//amra mulote ekta function er modde opor ekta function add korte pari ei niom e and amra calculator er moton jog (+), biog (-), gun(*), vag(/) o korte pari khub sohoje ei maddom..



function add(num1, num2){// ei bhabe korar fole amader result ta store hobe and result ta dekhtew parbp..
    const sum = num1 + num2;
    return num1 + num2;
}

function substract(num1, num2){// eibhabe likhle muloto eita kothaw store korbe na fole result asbe thikoi kintu debug korar somoy amra ta dekhte parbop na..
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}



function calculator(a, b, operation){
    if(operation === 'add'){
        const result = add(a, b);
        return result;
    }
    else if(operation === 'substract'){
        const result = substract(a, b);
        return result;
    }
    else if(operation === 'multiply'){
        const result = multiply(a, b);
        return result;
    }
    else if(operation === 'divide'){
        const result = divide(a, b);
        return result;
    }
    else{
        return "only 'add', 'substract', 'multiply', 'divide' operation is allow."
    }
}

const result = calculator(5, 7, 'divide');
console.log(result);