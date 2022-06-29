const Middleware = require("./Middlware");

class Maths {
    add({ a, b }) {
        return a + b;
    }

    substract({ a, b }) {
        return a - b;
    }

    multiply({ a, b }){
        return a * b;
    }
}

const calculator = new Maths();
const app = new Middleware(calculator);

app.use((req, next) => {
    req.a = req.a * 2;
    next();
});


console.log(app.add({ a: 1, b: 2}));