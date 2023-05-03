interface State {
    next(ticket: Ticket): number | null;
    add(ticket: Ticket, q: number): void;
}

class Ticket {
    private state: State;
    quantity: number;
    readonly limit: number;
    private number: number;

    constructor(limit: number) {
        this.limit = limit;
        this.quantity = 0;
        this.number = 0;
        this.state = new EmptyState();
    }

    get getNumber(): number {
        return this.number++;
    }

    set setState(state: State) {
        this.state = state;
    }

    get getState() {
        return this.state;
    }

    next(): number | null {
        return this.state.next(this);
    }

    add(quantity: number): void {
        this.state.add(this, quantity);
    }
}

class EmptyState implements State {
    next(ticket: Ticket): number | null {
        return null;
    }
    
    add(ticket: Ticket, q: number): void {
        if(ticket.limit > q) {
            ticket.quantity += q;
            ticket.setState = new WithDataState();
        } else if(q === ticket.quantity) {
            ticket.quantity = q;
            ticket.setState = new FullState();
        }
    }    
}

class WithDataState implements State {
    next(ticket: Ticket): number | null {
        ticket.quantity--;
        if(ticket.quantity <= 0) {
            ticket.setState = new EmptyState();
        }
        return ticket.getNumber;
    }
    add(ticket: Ticket, q: number): void {
        if((ticket.quantity + q) < ticket.limit) {
            ticket.quantity += q;
            ticket.setState = new WithDataState();
        } else if((ticket.quantity + q) == ticket.limit) {
            ticket.quantity += q;
            ticket.setState = new FullState();
        }
    }

}

class FullState implements State {
    next(ticket: Ticket): number | null {
        ticket.quantity--;
        if(ticket.quantity <=0) {
            ticket.setState = new EmptyState();
        } else {
            ticket.setState = new WithDataState();
        }
        return ticket.getNumber;
    }
    add(ticket: Ticket, q: number): void {
        console.info('Ticket lleno')
    }
    
}

const ticket = new Ticket(5);
console.log(ticket.getNumber)
console.log(ticket.getNumber)
console.log(ticket.getNumber)
console.log(ticket.getNumber)
console.log(ticket.getNumber)
console.log(ticket.getNumber)
console.log(ticket.getNumber)

 
