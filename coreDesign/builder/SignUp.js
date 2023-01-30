const User = require('./User');

class SignUp{
    create(name, email, password, nickname, age, isAdmin) {
        const newUser = new User(email, password, age);
        return newUser;
    }  
}

module.exports = new SignUp();