const Bank = require("./Bank");
const consoleLogger = require("./loggers/loggerDate")
const logger = require('./loggers/logger')

Bank.config({
    logger
})

Bank.createAccount('kevin', 120);
Bank.createAccount('aron', 10000)

Bank.printAccounts();