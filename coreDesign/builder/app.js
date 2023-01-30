const SignUpBuilder = require("./SignUpBuilder");

new SignUpBuilder(
    'Kevin',
    'kevin@hotmail.com',
    '12345'
)
.setAge(12)
.setNick('kevaron')
.setAdmin(false)
.create()