const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map((item)=>item);

solution(input);

function solution(input){
    let num = String(input[0]*input[1]*input[2]);

    for(let i = 0 ; i<= 9 ; i++){
        let count = 0 ;

        for(let j = 0 ; j<num.length ; j++){
            if(parseInt(num[j])===i){
                count++;
            }
        }
        console.log(count);
    }
}