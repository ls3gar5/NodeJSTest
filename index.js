const os = require('os');
const fs = require('fs');
const packageName = require('./math');
var colors = require('colors');

// console.log(packageName.add(1,2));
// console.log(packageName.substrat(1,2));
// console.log(packageName.multiply(1,2));
//console.log(packageName.divide(1,2));
//console.log(packageName.divide(1,0));
console.log(os.platform());
console.log(os.release());
//console.log(os.cpus());
console.log('Free mem: '.green,packageName.convertBytes(os.freemem()));
console.log('Total mem: '.green,packageName.convertBytes(os.totalmem()));

fs.readFile('./texto.txt', function(err, data){
    if (err) {
          console.log(err);
    }else{
        let final= 'Lectura archivo'+ data.toString();
        console.log(final.zebra); 
    }
});