// const Phone = require('./Phone');
// const iPhone = new Phone('123', 'X', 'generic', '5 gb');

const Iphone = require("./Iphone");
const iphoneFactory = require("./iphoneFactory");
const Samsumg = require("./Samsumg");

const iphone = new Iphone(123);
const samg = new Samsumg(1);



iphone.displayConfig();
samg.displayConfig();


