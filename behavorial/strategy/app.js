const Payment = require('./Payment');
const Chase = require('./Chase');
const CityBank = require('./CitiBank');

const payment = new Payment();

payment.pay(new CityBank(200, "110028SADS"));