const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().toLowerCase();

solution(input);

function solution(input){
    const result = new Array(26).fill(0);
    for(let i = 0 ; i<26 ; i++){
        result[input.charCodeAt(i) - 97] ++;
    }
    
    const max = Math.max(...result);
    const index = result.indexOf(max);

    let count = 0;
    for(let i = 0 ; i<26 ; i++){
        if(result[i] === max){
            count++;
        }
    }
    console.log(count > 1 ? '?' : String.fromCharCode(index +65));
}