class Singleton {
    static instance = null;
    static getInstance() {
        if(Singleton.instance) return Singleton.instance
        Singleton.instance = new Singleton();
        return Singleton.instance;
    }

    constructor() {
        this.random = Math.random();
        if(Singleton.instance) {
            return Singleton.instance
        }
        Singleton.instance = this;
    }
}

// const singleton = new Singleton();
// const singleton2 = new Singleton();
// console.log(singleton.random)
// console.log(singleton2.random)
// console.log(singleton === singleton2);

class WeekDays {
    daysEs = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
    dayEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    constructor(lang) {
        this.lang = lang;
        if(WeekDays.instance) {
            return WeekDays.instance;
        }
        WeekDays.instance = this;
    }

    getDays() {
        return this.lang === 'es' ? this.dayEn : this.dayEn;    
    }
}

const days = new WeekDays('en');
const days2 = new WeekDays('es');
console.log(days.getDays());
console.log(days2.getDays());