const axios = require('axios');

const CurrencyConverter = fn => {
    return async function(qty, price, base, to) {
        try {
            const result = await fn(qty, price)
            const currencyRate = await axios(`https://free.currencyconverterapi.com/api/v6/converter?q=${to.toUpperCase()}_${base.toUpperCase()}&compact=y`)

            return (currencyRate.data[`${to.toUpperCase()}_${base_toUpperCase()}`]['val'] * result);
        } catch (error) {
            return error
        }
    }
}

module.exports = CurrencyConverter;