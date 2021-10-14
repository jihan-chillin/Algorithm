const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

solution(input)

function solution(input){
    let ans ='';
    for(let i = 0 ; i<input[0] ; i++){
        let nums = input[i+1].split(' ');
        let plus = parseInt(nums[0])+parseInt(nums[1])
        ans += 'Case #'+(i+1)+": "+plus+'\n';
    }
    console.log(ans);
}