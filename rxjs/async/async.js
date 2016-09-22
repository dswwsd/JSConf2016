var async = require('async'),
    fs = require('fs');
var files = ['file1.txt', 'file2.txt', 'file3.txt'];
function saveFile (file, cb) {
    fs.writeFile(file, 'Hello Node', err => cb(err));
}
async.each(files, saveFile, err => {
    // if any of the saves produced an error, err would equal that error
});