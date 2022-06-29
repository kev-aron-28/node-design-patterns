const { lock, unlock } = require("./Vault");

const pass = 'password';

const obj = {
    name: "Kevin",
    age: 32,
    city: "Chicago",
    contry: "US"
};

const person = lock(obj, pass);
person.school = "Chicago";


const unlocked = unlock(obj, pass);

console.log(unlocked);