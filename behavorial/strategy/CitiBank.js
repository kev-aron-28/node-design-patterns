const Bank = require("./Bank");

class CityBank extends Bank{ 
    proccessPayment() {
        console.log(`Your payment of ${this.amount} for ${this.account} has been processed by CityBank`);
    }

    proccessRefund() {
        console.log(`Your refund of ${this.amount} for ${this.account} has been processed by CityBank`);
    }
}

module.exports = CityBank;