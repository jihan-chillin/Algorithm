const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input){
    const N = input[0];
    const scores = input[1].split(' ').map((item)=> +item);

    let max = scores[0];

    for(let i = 1 ; i<N ; i++){
        if(max < scores[i]){
            max = scores[i];
        }
    }
    let sum = 0 ;

    for(let i = 0 ; i<N ; i++){
        sum+= scores[i] / max * 100;
    }
    console.log(sum/N);
}