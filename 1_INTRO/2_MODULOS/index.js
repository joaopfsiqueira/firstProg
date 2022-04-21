const fs = require('fs'); //file system module with require

//lendo arquivo em node js.
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
} );
