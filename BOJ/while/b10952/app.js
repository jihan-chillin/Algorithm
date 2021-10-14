const fs = require('fs');
const fileParh = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(fileParh).toString().split('\n');

solution(input);

function solution(input){
    while (input[0][0] != 0) {
        const numbers = input.shift().split(" ");
        
        console.log(+numbers[0] + +numbers[1]);
    }
}
