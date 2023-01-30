const SignUp = require("./SignUp");

class SignUpBuilder {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    setNick(nickname) {
        this.nickname  = nickname;
        return this;
    }

    setAge(age){
        this.age = age;
        return this;
    }

    setAdmin(isAdmin){
        this.admin = isAdmin;
        return this;
    }

    create() {
        console.log(SignUp.create(
            this.name, 
            this.email, 
            this.password, 
            this.nickname, 
            this.age, 
            this.isAdmin
        ));
    }
}

module.exports = SignUpBuilder;