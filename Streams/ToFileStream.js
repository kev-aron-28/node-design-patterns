const { Writable } = require('stream');
const { promises } = require('fs');
const { dirname, join } = require('path');
const mkdirp = require('mkdirp-promise');

class ToFileStream extends Writable {
    constructor(options) {
        super({ ...options, objectMode: true });
    }

    _write(chunk, encoding, cb) {
        mkdirp(dirname(chunk.path))
            .then(() => promises.writeFile(chunk.path, chunk.content))
            .then(() => cb())
            .catch(cb)
    }
}

const tfs = new ToFileStream()
tfs.write({
    path: join('files', 'file.txt'),
    content: 'Hello'
})

tfs.write({
    path: join('files', 'file2.txt'),
    content: 'Hello kevin'
})

tfs.end(() => console.log('done'));
