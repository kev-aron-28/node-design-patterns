class Profiler {
    constructor(label) {
        this.label = label
        this.lastTime = null
    }

    start() {
        this.lastTime = process.hrtime()
    }

    end() {
        const diff = process.hrtime(this.lastTime)
        console.log(`Timer ${this.label} took ${diff[0]} seconds and ${diff[1]} nanoseconds`)
    }
}


const noopProfiler = {
    start() {},
    end() {}
}

const createProfiler = (label) => {
    if(process.env.NODE_ENV === 'production') return noopProfiler

    return new Profiler(label);
}


const getAllFactors = (number) => {
    const profiler = createProfiler(`Factors of ${number}`);
    profiler.start();
    const factors = [];
    for (let i = 2; i < number; i++) {
        while((number % i) === 0) {
            factors.push(i);
            number = number / i 
        }
    }

    profiler.end();

    return factors;
}


const number = process.argv[2];
const factors = getAllFactors(number);

console.log(`Factors ${factors}`);
