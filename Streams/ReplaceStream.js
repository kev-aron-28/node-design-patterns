const { Transform } = require('stream');

class ReplaceStream extends Transform {
    constructor(searchStr, replaceStr, options) {
        super({ ...options })
        this.searchStr = searchStr;
        this.replaceStr = replaceStr;
        this.tail = ''
    }

    _transform(chunk, encoding, callback) {
        const pieces = (this.tail + chunk).split(this.searchStr);
        const lastPiece = pieces[pieces.length - 1];
        const tailLen =  this.searchStr.length - 1;
        this.tail = lastPiece.slice(-tailLen);
        pieces[pieces.length - 1] = lastPiece.slice(0, -tailLen);
        this.push(pieces.join(this.replaceStr));
        callback()
    }

    _flush(callback) {
        this.push(this.tail);
        callback();
    }
}


const rs = new ReplaceStream('World', 'Node js');
rs.on('data', chunk => console.log(chunk.toString()));

rs.write('Hello W');
rs.write('orld!');
rs.end();
