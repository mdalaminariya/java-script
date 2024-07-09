const numbers = [56, 25, 55, 24, 36, 95];


// for(let i = 0; i < numbers . length; i++){
//     const number = numbers[i];
//     // console.log(number);
// };

//new update short-cut

for(const number of numbers){
    // console.log(number);
}


//ei bhabe khub sohojei amra ekta product ke khuje bahir korte pari..

const products = [
    {id: 1, Name: 'walton phone', price: 17000},
    {id: 2, Name: 'Symphony phone', price: 16000},
    {id: 3, Name: 'Vivo phone', price: 21000},
    {id: 4, Name: 'Deli mac book', price: 30000},
    {id: 5, Name: 'Hp laptop', price: 40000},
    {id: 6, Name: 'Lenovo mac book', price: 25000},
    {id: 6, Name: 'I-Phone', price: 25000},
]

// for(const product of products){
// console.log(product)};


function matchedProducts (products, search){
    const matched = []; //ekadik item rakhar jonne array ke call kora hoyese..
    for(const product of products){
        //jokhon amra kisu khujbo tokhon result valo bhabe pawar jonne name toLowerCase er pashe pashi search takew toLowarCase  korte hobe..eitar mul karon holo case sensative theke jodi amra mukto thakte pari.
        if(product.Name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'Book');
console.log(result);