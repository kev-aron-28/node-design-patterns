class Phone {
    constructor(serial, model = 'Generic', processor = 'Generic', ram = '2 gb') {
        this.serial  = serial;
        this.config = {
            model,
            processor,
            ram
        }
    }

    dial(num) {
        console.log(`Now dialing ${num}`);
    }

    displayConfig() {
        console.log(this.config);
    }
}

module.exports = Phone;