const { Chance } = require("chance");
const { Readable } = require("stream");
const chance = new Chance();

class RandomStream extends Readable {
    constructor(options) {
        super(options);
        this.emittedBytes = 0;
    }

    _read(size) {
        const chunk = chance.string({ length: size });
        this.push(chunk, 'utf8');
        this.emittedBytes += chunk.length;
        if(chance.bool({ likelihood: 5 })){ 
            this.push(null)
        }
    }
}

const randomStream = new RandomStream();
randomStream.on('data', (chunk) => {
    console.log(`chunck received (${chunk.length}) bytes) : (${chunk.toString()})`);
});
