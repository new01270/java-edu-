//basics.js

let num1, num2, num3, result; // 변수선언 한꺼번에 가능.
num1 = 10;
// num1 = "nice";  // 타입이 선언할 때 마다 바뀜.
num2 = 20;
result = num1 * num2;
console.log(num1);
console.log(result); // 숫자와 문자 연산 시, NaN



// if(num1 > num2 || num1 > num3) {
//     alert('large');
// }else {
//     alert('small');
// }

// result = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 15 == 0)
//         continue;
//     else if (i % 3 == 0 || i % 5 == 0)
//         result += i;
// }




result = 0;
let cnt = 0;
while (cnt < 15) {
    result += cnt;
    cnt++;
}
console.log(result);



console.clear();



let arr = [2, 3, 4, 5, 6, 7];
result = 0;
for (num of arr) {
    result += num;
}
console.log(result);



let strArr = ['hello', 'nice', 'good', 'beautiful'];
for (str of strArr) {
    console.log(str);
}


let days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

let ul = document.createElement('ul');

let show = document.getElementById('show');
show.append(ul);

for (day of days) {
    let li = document.createElement('li');
    ul.append(li);
    li.innerHTML = day;
    
}
console.log(ul);
