const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for(var i = 0 ; i<input.length ; i++){
    solution(input[i].split(' ')[0], input[i].split(' ')[1])
}

function solution(a, b){
    if(a>b){
        console.log('>');
    }
    else if(a<b){
        console.log('<');
    }
    else{
        console.log('==');
    }
}


