const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let i=0;
solution(input);

function solution(input){
    
    while(i<input.length-1){
        let nums = input[i].split(' ').map((item) => +item);
        let ans = nums[0]+nums[1];

        console.log(ans);
        i++;
    }
}