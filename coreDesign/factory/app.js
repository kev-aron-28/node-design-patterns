// const Phone = require('./Phone');
// const iPhone = new Phone('123', 'X', 'generic', '5 gb');

const Iphone = require("./Iphone");
const iphoneFactory = require("./iphoneFactory");
const Samsumg = require("./Samsumg");
const s = iphoneFactory.create('samsung', 123);
console.log(s);



