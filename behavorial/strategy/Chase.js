const Bank = require("./Bank");

class Chase extends Bank{ 
    proccessPayment() {
        console.log(`Your payment of ${this.amount} for ${this.account} has been processed by Chase`);
    }

    proccessRefund() {
        console.log(`Your refund of ${this.amount} for ${this.account} has been processed by Chase`);
    }
}

module.exports = Chase;