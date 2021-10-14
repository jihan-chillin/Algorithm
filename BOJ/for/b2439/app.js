const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(t){
    let star = '';
    let blank = '';

    for(let i = 1 ; i<=t ; i++){
        star +='*';
        for(let j =0 ; j< t-i ; j++){
            blank +=' ';
        }
        console.log(blank + star);
        blank = '';
    }
}