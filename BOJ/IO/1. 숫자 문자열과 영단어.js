// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// 1 ≤ s의 길이 ≤ 50
// s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
// return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.

function solution(s) {
    
    let answer = 0;
    
     s = s.replace(/zero/g, 0);
     s = s.replace(/one/g, 1);
     s = s.replace(/two/g, 2);
     s = s.replace(/three/g, 3);
     s = s.replace(/four/g, 4);
     s = s.replace(/five/g, 5);
     s = s.replace(/six/g, 6);
     s = s.replace(/seven/g, 7);
     s = s.replace(/eight/g, 8);
     s = s.replace(/nine/g, 9);
    
     s = Number(s);
    return s;
    
}