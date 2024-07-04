/**
 * buy a ticket upto 100tk:---> 100tk
 * buy a ticket upto 101-200tk:---> 90tk
 * buy a ticket upto 201tk:---> 70tk
 */


function discountPrice(Quantity){
    if(Quantity <= 100){
        const total = Quantity * 100;
        return total;
    }
    else if(Quantity <= 200){
        const total = Quantity * 90;
        return total;
    }
    else{
        const total = Quantity * 70;
        return total;
    }
}

const total = discountPrice(201);
console.log(total);