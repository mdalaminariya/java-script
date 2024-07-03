const dhan = 56;
const show = 89;

if(dhan > show){
    console.log('dhan get tha strawberry')
}
else{
    console.log('show get the strawberry');
}


//inside a function
//ei bhabe amra ek ba ekadik upaden theke sob theke boro songkhabahir korte pari..

function getmax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max1 = getmax(56, 89);
const max2 = getmax(56, 97);
const ultimate = getmax(max1, max2);
console.log('max number is: ', ultimate);