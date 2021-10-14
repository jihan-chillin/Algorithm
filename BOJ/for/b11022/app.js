const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

solution(input)

function solution(input){
   
    for(let i = 1 ; i <= input[0] ; i++){
       let num1 = +input[i].split(' ')[0];
       let num2 = +input[i].split(' ')[1];

       console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
    
    }
    
}