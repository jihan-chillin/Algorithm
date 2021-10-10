const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const firstInput = input[0];
const secondInput = input[1].split('');

for(var i = secondInput.length-1 ; i>=0 ; i--){
    console.log(firstInput*secondInput[i]);
}

console.log(firstInput*input[1]);