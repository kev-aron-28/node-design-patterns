let total = 0;

const CashRegister = {
    credit(amount) {
        total += amount;
    },
    total() {
        return total;;
    }
}
module.exports = CashRegister;