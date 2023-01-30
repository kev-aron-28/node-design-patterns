class SaleContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }

    calculate(amount) {
        return this.strategy.calculate(amount);
    }
}

class RegularSaleStrategy{
    constructor(tax) {
        this.tax = tax;
    }

    calculate(amount) {
        return amount + (this.tax * amount);
    }
}

class DiscountSaleStrategy{
    constructor(tax, discount) {
        this.tax = tax;
        this.discount = discount;
    }

    calculate(amount) {
        return amount + (amount * this.tax) - this.discount
    }
}

class ForeingSaleStrategy {    
    
    calculate(amount) {
        return amount * this.getDollarPrice();
    }

    getDollarPrice() {
        return 20;
    }
}

const regular = new RegularSaleStrategy(0.16);
const discount = new DiscountSaleStrategy(0.16, 3)
const foreingSale = new ForeingSaleStrategy()
const sale = new SaleContext(regular);
sale.setStrategy(foreingSale);
console.log(sale.calculate(20));