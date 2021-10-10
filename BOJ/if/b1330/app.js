const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let inputArr ;

for(var i = 0 ; i<2 ; i++){
    inputArr = inputArr[i].split(' ');
}