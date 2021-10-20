// 1. d(n) 값을 return하는 함수를 만들자
// 2. 0 ~ 10000까지의 범위 내에 숫자들을 넣을 배열을 선언
// => 생성자가 없는 경우 true, 생성자가 있을 경우 false값으로 return
// 3. false 즉, 셀프넘버를 출력하자

function d(n) {
    let number = n;
    let sum = 0;

    for (let i = 0; i < String(n).length; i++) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return n + sum;
}

let selfNumbers = Array(10001).fill(true);

for(let j = 0 ; j<10000; j++){
    selfNumbers[d(j)] = false;
}

let ans = '';

for(let k = 0 ; k<10000 ; k++){
    if(selfNumbers[k]){
        ans += k +'\n';
    }
}

console.log(ans);