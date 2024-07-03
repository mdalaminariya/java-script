const products = [
    { Name: 'Shampoo', price: 250, Quantity: 1},
    { Name: 'Chiruni', price: 100, Quantity: 1},
    { Name: 'Shirt', price: 850, Quantity: 2},
    { Name: 'Pant', price: 550, Quantity: 3},
]

function getCartTotal(products){
    let total = 0;
    for(const product of products){
        const productCost = product.price * product.Quantity;
        total = total + productCost;

    }
    return total;
}

const cartTotal = getCartTotal(products);
console.log(cartTotal);