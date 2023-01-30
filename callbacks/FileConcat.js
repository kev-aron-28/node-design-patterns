const fs = require('fs');


// The secuential iterator pattern 
const concatFilesHelper = (files, dest, index, cb) => {
    if(index === files.length) return cb(null);

    const task = files[index];
    console.log(task)

    fs.readFile(task, 'utf8', (err, data) => {

        if(err) return cb(err);

        fs.appendFile(dest, data, (err) => {
            if(err) return cb(err);
        })

        concatFilesHelper(files, dest, index + 1, cb);
    })

}

const concatFiles = (files, dest, cb) => {
    concatFilesHelper(files, dest, 0, cb);
}

concatFiles([
    'file1.txt',
    'file2.txt',
], 'result.txt', (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('File created');
    }
})
