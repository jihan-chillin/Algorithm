const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input){
    const N = input.shift();
    const sorted = input.sort((a,b)=>a-b);

    for(let i = 0 ; i<N ; i++){
        console.log(sorted[i]);
    }
}