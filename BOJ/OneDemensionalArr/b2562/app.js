const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map((item)=> +item);

solution(input);

function solution(input){
    let max = input[0];
    let maxIndex = 0 ;

    for(let i = 1 ; i<9 ; i++){
        if(max < input[i]){
            max = input[i];
            maxIndex = i;
        }
    }

    console.log(max);
    console.log(maxIndex+1);
}