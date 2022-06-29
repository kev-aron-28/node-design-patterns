class Bank {
    constructor(amount, account) {
        this.amount = amount;
        this.account = account;
    }

    pay(){
        return this.proccessPayment();
    }

    refund(){
        return this.proccessRefund();
    }
}

module.exports = Bank;