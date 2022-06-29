const Item = require("./Item");

class MobilePhone extends Item {
    constructor(name, color, cost) {
        super(name, "MobilePhone");
        this.color = color;
        this.cost = cost;
    }

    getDetails() {
        console.log(`${this.name} :: ${this.color} color, priced at MX ${this.cost}`);

    }
}

module.exports = MobilePhone;