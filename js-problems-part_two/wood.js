/***
 * chair---> 3cft (cubiq fit)
 * table---> 10cft
 * bed---> 50cft
 */

function woodQuantity (chairQuantity, tableQuantity, bedQuantity){
    const perChaiWood = 3;
    const perTableWood = 10;
    const perbedWood = 50;

    const chairTotalWood = chairQuantity * perChaiWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perbedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

const wood = woodQuantity(4, 2, 1);
console.log('wood needed', wood);


//fashion buy


function fashionQuantity (shirtQuantity, pantQuantity, shoeQuantity){
    const perShirtPrice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;

    const shirtTotalPrice = perShirtPrice * shirtQuantity;
    const pantTotalPrice = perPantPrice * pantQuantity;
    const shoeTotalPrice = perShoePrice * shoeQuantity;

    const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

    return totalPrice;
}

const price = fashionQuantity(3, 3, 2);
console.log('total amount: ', price);