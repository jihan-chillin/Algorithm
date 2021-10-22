const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input){
    const count = input[0];
    const numArr = input[1].split('');
    let sum = 0;

    for(let i = 0 ; i<count ; i++){
        sum += Number(numArr[i]);
    }

    console.log(sum);
}