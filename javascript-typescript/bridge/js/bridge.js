class EncoderTextAbstraction {
    constructor(encoder) {
        this.encoder = encoder;
    }

    encode(str){
        return this.encoder.encode(str);
    }
    
    decode(str) {
        return this.encoder.decode(str);
    }
}

class Base64EncoderImpl {
    encode(str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    }

    decode(str) {
        return decodeURIComponent(escape(window.atob(str)));
    }
}

class HTMLEncoderImpl {
    encode(str) {
        return str.split(/\./g).reduce((ac, e) =>  {
            return ac + `<p>${e.trim()}</p>`
        })
    }
}

const encoder = new EncoderTextAbstraction(new Base64EncoderImpl());
console.log(encoder.encode('pato'));

const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImpl());
console.log(encoder2.encode('pato'));
