const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCase = input[0];

for(let i = 1 ; i<=testCase ; i++){
    let num = input[i].split(' ');
    console.log(parseInt(num[0])+parseInt(num[1]));
}