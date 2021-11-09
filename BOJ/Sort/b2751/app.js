const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input){
    input.shift();
    let answer = input.sort((a, b) => a - b);
    console.log(answer.join('\n'));
}
