const products = [
    { Name: 'Shampoo', price: 250},
    { Name: 'Chiruni', price: 100},
    { Name: 'Shirt', price: 850},
    { Name: 'Pant', price: 550},
]

function getShoppingTotal(products){
    let sum = 0;
    for(const product of products){
        sum = sum + product.price;
    }
    return sum;
}

const total = getShoppingTotal(products);
console.log(total);