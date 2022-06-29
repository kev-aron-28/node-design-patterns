const Phone = require("./Phone");

class Iphone {
    constructor(serialNum) {
        return new Phone(serialNum, 'X', 'Y', 'Z');
    }
}

module.exports = Iphone;