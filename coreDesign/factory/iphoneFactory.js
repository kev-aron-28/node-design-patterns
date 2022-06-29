const Iphone = require("./Iphone");
const Samsumg = require("./Samsumg");

class IphoneFactory {
    create(type, serialNum) {
        switch (type) {
            case 'iphone': return new Iphone(serialNum);
            case 'samsung': return new Samsumg(serialNum)
        }
    }
}

module.exports = new IphoneFactory();