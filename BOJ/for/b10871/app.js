const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0].split(' ')[0];
const X = +input[0].split(' ')[1];

solution(input, N, X);

function solution(input, N, X){
    let numArr = input[1].split(' ');
    let ans = '';
    for(let i = 0 ; i<N ; i++){
        if(numArr[i]<X){
            ans += numArr[i] +' ';
        }
    }
    console.log(ans);
}