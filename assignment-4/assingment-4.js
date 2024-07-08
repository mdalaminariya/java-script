// problem solving -1

function calculateMoney(ticketSale){
    const perTicketPrice = 120;
    const totalSellingPrice = perTicketPrice * ticketSale;
    const perdaySpend = 900;
    const total = totalSellingPrice - perdaySpend;
    return total;
}

// problem solving-2
function checkName(name){
    char = name.trim().toLowerCase().split("");
    if(char [char.length - 1] == "a" || char [char.length - 1] == "y" || char [char.length - 1] == "i"|| char [char.length - 1] == "e" || char [char.length - 1] == "o" || char [char.length - 1] == "u" || char [char.length - 1] == "w"){
        return "it's a good Name";
    }
    else{
        return "it's a bad name";
    }
}

//problem solving-3

function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return 'Invalid Array';
    } else {
        let newArray = [];
        for (let item of array) {
            if (typeof item === 'number') {
                if (!isNaN(item)) {
                    newArray.push(item)
                    continue
                }
            }
        }
        return newArray;
    }
}

//problem solving-4

function account(account) {
    if (typeof account !== 'object') {
        return 'give me object'
    } else if (typeof account.name === 'undefined' || typeof account.birthYear === 'undefined' || typeof account.siteName === 'undefined') {
        return 'invalid';
    } else if (account.birthYear < 999) {
        return 'invalid';
    }
    else {

        const word = account.siteName.split(' ');
        for (let i = 0; i < word.length; i++) {
            word[i] = word[i][0].toUpperCase() + word[i].substring(1);
        }


        const Account = `${word}#${account.name}@${account.birthYear}`;
        return Account;
    }
}
//problem solving-5

function monthlySavings(arr, livingCost) {

    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return 'invalid input';
    } else {
        let sum = 0;
        
        for (let item of arr) {
            
            if(item <= 3000){
                item - (item * (100 / 20))
            }
            sum += item;
        };
        if(sum > livingCost){
            const result = sum - livingCost;
            return result;
        }else{
            return 'earn more';
        }
    }

}
