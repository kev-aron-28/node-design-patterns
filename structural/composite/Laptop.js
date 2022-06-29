const Item = require("./Item");

class Laptop extends Item {
    constructor(name, model, cost) {
        super(name, "Laptop");
        this.model = model;
        this.cost = cost;
    }

    getDetails() {
        console.log(`${this.name} :: ${this.color} color, priced at MX ${this.cost}`);
    }
}

module.exports = Laptop;