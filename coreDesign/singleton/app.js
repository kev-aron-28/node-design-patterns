const cashRegister = require('./CashRegister');
const cashRegister2 = require('./CashRegister');

cashRegister.credit(10);
cashRegister2.credit(10);

console.log(`Cash in 1 ${cashRegister.total()}`);