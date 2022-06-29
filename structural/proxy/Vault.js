const cryptr = require('cryptr');
const lock = (obj, password) => {
    const c = new cryptr(password);
    let newObj = {};
    for(const i of Object.keys(obj)){
        newObj[i] = c.encrypt(obj[i]);
    }

    return new Proxy(newObj, { 
        set(target, key, value) {
            return (target[key] = c.encrypt(value));
        },

        get(target, key) {
            return target[key]
        }
    });
}

const unlock = (obj, password) => {
    const c = new cryptr(password);
    let newObj = {};
    for(const i of Object.keys(obj)){
        newObj[i] = c.decrypt(obj[i]);
    }

    return new Proxy(newObj, {
        set() {
            throw new Error("this is read-only")
        }
    });
}

module.exports = {
    lock,
    unlock
}