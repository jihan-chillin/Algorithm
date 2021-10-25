const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input){
    const str = input[0];
    console.log(str.charCodeAt(0));
}