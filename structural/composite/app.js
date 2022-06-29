const Catalog = require("./Catalog");
const Laptop = require("./Laptop");
const MobilePhone = require("./MobilePhone");

const iPhoneXS = new MobilePhone('apple iphone', 'white', 89000);
const OnePlust = new MobilePhone('One plus', 'white', 89000);
const Lenovo = new Laptop('Lenovo', 'black', 10000);

const Phones = new Catalog('Mobile phones');
Phones.add(iPhoneXS).add(OnePlust);

// Phones.getDetails();

const PrimeProducts = new Catalog('Prime Products');
PrimeProducts.add(Phones);
PrimeProducts.getDetails();