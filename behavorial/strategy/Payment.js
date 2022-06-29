class Payment {
    pay(proccesor) {
        return proccesor.pay();
    }
    refund(proccesor) {
        return proccesor.refund();
    }
}

module.exports = Payment