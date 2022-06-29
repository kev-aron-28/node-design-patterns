let accounts = [];

class Bank { 
    
    constructor() {
    }

    createAccount(name, total) {
        accounts.push({
            name,
            total
        });
    }

    credit(name, amount){
        accounts.find(account => account.name === name).total += amount;
    }

}


// Hidding methods or 
module.exports = new Bank();