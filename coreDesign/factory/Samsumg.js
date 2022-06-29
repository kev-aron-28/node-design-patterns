const Phone = require("./Phone");

class Samsumg {
    constructor(serialNum) {
        return new Phone(serialNum, 'X', 'Y', 'Z');
    }
}

module.exports = Samsumg;