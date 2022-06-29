const CurrencyConverter = require("./CurrencyConverter");

const Cost = (qty, price) => Promise.resolve(qty * price);
Cost(20, 1).then(cost => console.log(cost));

const costPlus = CurrencyConverter(Cost);
costPlus(20, 6, "INR", "EUR").then(cost => console.log(cost));