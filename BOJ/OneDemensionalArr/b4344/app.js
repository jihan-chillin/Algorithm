const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input){
    const num = input[0];

    for(let i = 1 ; i <= num ; i++){
        let scores = input[i].split(' ').map((item)=> +item);
        let students = scores[0];

        let sum = 0 ; 
        let avg;
        let count = 0;

        for(let j = 1 ; j<=students ; j++){
            sum += Number(scores[j]);
        }
        avg = (sum/students).toFixed(3);

        for(let k = 1 ; k<=students ; k++){
            if(scores[k]>avg) count ++;
        }

        console.log((count/students*100).toFixed(3)+'%');
    }
}