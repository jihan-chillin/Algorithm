const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map((item)=>+item);

solution(input);

function solution(input){
    const count = [];
    let num ; 

    for(let i = 0 ; i<input.length ; i++){
        num = input[i] % 42;
        if(count.indexOf(num) === -1 ){
            count.push(num);
        }
    }
    console.log(count.length);
}