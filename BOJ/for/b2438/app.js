const fs =require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(t){
    let star ='';
    for(let i = 0 ; i<t ; i++){
        star +="*";
        console.log(star);
    }
}