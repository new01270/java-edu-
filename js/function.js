//function.js


//방법1.
function sumFunc(var1, var2) { //var매개값-> 타입없이 선언 가능.
    let num1, num2;
    num1 = var1;
    num2 = var2;
    let result = num1 + num2;

    console.log(result);
    return result;
}
// sum();  //실행.
let sum = sumFunc(33, 44); //매개값 압력해 return받는다.


let newFunc = multiFunc;
console.log(multiFunc());
console.log(newFunc());





//방법2.
let multiFunc = function (v1, v2) {
    let num1 = v1,
        num2 = v2;
    return num1 * num2;
}
// console.log(multiFunc);   //multiFunc의 정의 출력.
console.log(multiFunc()); //return값 반환.




//방법3. 매개변수에 함수 적용 가능한 예.java에선 불가.
function callBackFunc(func, val1) {
    //call한다 function()를 ->매개값을 받아서 연산.
    return func(3, 5) + val1; //function (v1,v2) 매개값 연산.
}
sum = callBackFunc(multiFunc, 11); //func(multiFunc의 return값) + val1(11)=200.
console.log(sum);
document.write(sum);




//연습.
function myFunc(v1, v2) {
    let result = 0;
    for (i = v1; i <= v2; i++)
        result += i;
    return result;
}
sum = myFunc(1, 5); //sum=15
// console.log(sum);
document.write(sum);
console.log(myFunc(1, 5)); //바로 호출.



let myFunc2 = function (v1, v2) {
    let result = 0;
    for (i = v1; i >= v2; i--)
        result += i;
    return result;
}
sum = myFunc2(5, 1);
console.log(sum);
document.write(sum);




let myFunc3 = function (v1, v2) {
    if (v1 < v2) {
        return myFunc(v1, v2);

    } else
        return myFunc2(v1, v2);
}
sum = myFunc3(10, 7);
console.log(sum);




function myFunc4(v1, v2) {
    let tem;
    if (v1 > v2) {
        tem = v1;
        v1 = v2;
        v2 = tem;
    }
    let sum = 0;
    for (i = v1; i <= v2; i++) {
        sum += i;
    }
    return sum;
}
sum = myFunc4(5, 1);
console.log(sum);