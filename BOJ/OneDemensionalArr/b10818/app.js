const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input)

function solution(N){
    const count = N[0];
    let Arr = N[1].split(' ').map((item) => +item);
    let max = Arr[0];
    let min = Arr[0];

    for(let i = 1 ; i<count ; i++){
        if(max < Arr[i]){
            max = Arr[i];
        }
        else if(min > Arr[i]){
            min  = Arr[i];
        }
    }
    console.log(min+' '+max);
    
}