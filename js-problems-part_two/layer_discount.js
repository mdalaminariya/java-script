//jokhon ekta discount layer er maddome jemon prothom layer e full payment korte hobe..2nd layer e joto gulo kina hobe erupor discount halka kom thakbee..3rd layer er ticket er jonne aro extra discount dewa hobe..sei khetre eke layer discount bola hoy..ete kore nirdisto layer er upor jei discount ase sei discount dewa hoy..


function layerDiscountPrice(Quantity){
    const first100Price = 100;
    const second100Price = 90;
    const third100Price = 70;

    if(Quantity <= 100){// amra jokhon 100 ta tiket kinbo tokkhon 1st layer onujai kono discount pabo na sei khetre ei niom..
        const total = Quantity * first100Price;
        return total;
    }
    else if(Quantity <= 200){// eita mulotot jokhon amra 100 er beshi ticket katbo sei khetre 100 ticket er dam rakhbe shuru te er porer jei gulo kina hobe sei gulor upor nirdisto poriman er discount diye ager 100 ticket er tk er sathe eibare discount er ta jog (+) hobe..
        const first100Total = 100 * first100Price;
        const remainingQuantity = Quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else{//ei jaygay muloto kora hoyese amra first jei 100 ticket full tk diye kinesi..oitar sathe second layer e giye joto ticket kom discount diye kinesi tar sathe 3rd layer er dicount er poriman ta jog (+) kora hoyese..
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = Quantity - 200;
        const remainingTotal = remainingQuantity * third100Price
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}

const total = layerDiscountPrice(201);
console.log(total);