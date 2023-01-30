class SingletonTS {
    private static instance: SingletonTS;
    public random: number;
    private constructor() {
        this.random = Math.random()
    }

    public static getInstance(): SingletonTS {
        if(!this.instance) {
            this.instance = new SingletonTS();
        }

        return this.instance;
    }
}

const singleton = SingletonTS.getInstance();
const singleton2 = SingletonTS.getInstance();

console.log(singleton === singleton2);
console.log(singleton.random, singleton2.random)