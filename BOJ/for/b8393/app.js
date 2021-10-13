const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0].split(' ').map((item)=> +item);

solution(input);

function solution(n){
    let num = 0;
    for(let i=1 ; i<=n ; i++){
        num += i ;
    }
    console.log(num);
}