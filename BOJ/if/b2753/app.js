const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(a){
    if(a%4 == 0 && a%100 != 100 || 400%a == 0){
        console.log(1);
    }
    else{
        console.log(0);
    }
}