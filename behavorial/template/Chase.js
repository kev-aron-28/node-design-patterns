const Bank = require("./Bank");

class Chase extends Bank {
    constructor() {
        super();
    }

    processCredit(name, amount) {
        const getAccount = this._getAccount(name);
        if(getAccount) {
            getAccount.funds = getAccount.funds + amount;   
        }
    }
}

module.exports = Chase;