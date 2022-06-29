let accounts = [];

class Bank { 
    
    config({ logger }) {
        this.logger = logger;
        console.log(this.logger.write);
    }

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
    
    printAccounts() {
        this.logger.write(accounts);
    }



}


// Hidding methods or 
module.exports = new Bank();