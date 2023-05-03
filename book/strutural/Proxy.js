const { createWriteStream } = require('fs');
function loggin(writable){
    return new Proxy(writable, {
        get(target, property, receiver) {
            if(property === 'write') {
                return function(...args) {
                    const [chunk] = args;
                    console.log('Writing', chunk);
                    return writable.write(...args);
                }
            }

            return target[property];
        }
    })
}

const writable = createWriteStream('first chunk');
const writableProxy = loggin(writable);

writableProxy.write('first chunk');
writableProxy.end();
