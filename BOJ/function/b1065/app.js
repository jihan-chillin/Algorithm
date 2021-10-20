const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map((item)=>+item);

solution(input);

function solution(input){
    let num = input[0];
    let count = 0;
    for(let i = 1 ; i<=num ; i++){
        let hundredsPlace = Math.floor((i%1000)/100);
        let tensPlace = Math.floor((i%100)/10);
        let onesPlace = i%10;

        if(i>=1 && i<100){
            count++;
        }
        else if(i>=100 && i<1000){
            // 어차피 1000은 한수가 아니므로 포함시킬 필요 X
            if(hundredsPlace - tensPlace === tensPlace - onesPlace){
                count++;
            }
        }
    }
    console.log(count);
}