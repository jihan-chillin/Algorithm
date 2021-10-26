const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input){
    const testCase = input[0];
    
    for(let i = 0 ; i<testCase ; i++){
        const T = input[i+1].split(' ');
        const R = T[0];
        const str = T[1].split('').map(v=>v.repeat(R)).join('');

        console.log(str);
    }
}