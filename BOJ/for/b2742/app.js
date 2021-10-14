const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const testCase = input[0];

solution(testCase);

function solution(n){
    let ans = '';
    for(let i=n ; i>=1 ; i--){
        ans += i + '\n';
    }
    console.log(ans);
}