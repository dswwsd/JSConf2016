var Rx = require('rxjs/Rx'),
    fs = require('fs');
var files = ['file1.txt', 'file2.txt', 'file3.txt'];
// wrap the method
var writeFile = Rx.Observable.bindNodeCallback(fs.writeFile);
Rx.Observable
	.from(files)
	.flatMap( file => writeFile(file, 'Hello Node'))
    .subscribe(
        () => console.log('file written!'),
        err => console.log(`err ${err}`),
        () => console.log('completed!')
    );