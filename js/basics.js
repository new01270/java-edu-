//basics.js

let num1, num2, num3, result;   // 변수선언 한꺼번에 가능.
num1 = 10;
// num1 = "nice";  // 타입이 선언할 때 마다 바뀜.
num2 = 20;
result = num1 * num2;
console.log(num1);
console.log(result);    // 숫자와 문자 연산 시, NaN

if(num1 > num2 || num1 > num3) {
    alert('large');
}else {
    alert('small');
}
console.log(result);



