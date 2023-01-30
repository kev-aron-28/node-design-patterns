interface Strategy {
    login(user: string, password: string): boolean;
}

class LoginContext {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }


    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }
}

class LoginDBStrategy implements Strategy{

    login(user: string, password: string): boolean {

        if(user === 'admin' && password === '123') {
            return true
        }
        return false;
    }    
}

const context = new LoginContext(new LoginDBStrategy());
context.login('kevin', 'user');
