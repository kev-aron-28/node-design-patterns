class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs != observer);
    }

    notify(data) {
        this.observers.forEach(ob => {
            ob.refresh(data);
        })
    }
}

class Observer {
    constructor(fn) {
        this.fn = fn;
    }

    refresh(data) {
        this.fn(data);
    }
}

const s = new Subject();
const o1 = new Observer(d => console.log("Observer 1 ", d));
const o2 = new Observer(d => {
    div1.innerHTML = d;
});
s.subscribe(o1);
s.subscribe(o2);
function change() {
    s.notify(myText.value)
}
