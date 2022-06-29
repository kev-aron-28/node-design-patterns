class Bank {
    constructor() {
        this.vault = [];
    }

    createAccount(name, initalDeposit) {
        
    }

    _getAccount(name){
        return this.vault.find(account => account.name === name);
    }

    view(name) {
        const getAccount = this._getAccount(name);
        if(getAccount) {
            console.log(`Account ${getAccount.name} has USD ${getAccount.founds}`);
        }
    }

    credit(name, account) {
        console.log(`Crediting ${amount} to account ${name}`);
        return this.processCredit(name, account);
    }

    debit(name, account) {
        console.log(`Debiting ${amount} from account ${name}`);
        return this.processDebit(name, account);
    }
}

module.exports = Bank;