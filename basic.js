let cnt = 0; // let.변수선언
let sum = 0;

for (let i = 0; i < 5; i++) {
    // console.log(i + "Hello, World")
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log('짝수합계: ' + sum); //console창에 출력



sum = "Hello"; //초기화
console.log(sum);


sum = 0;
let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('index[0]:' + ary[0]);

for (let i = 0; i < ary.length; i++) {
    if (ary[i] % 2 == 1) {
        sum += ary[i];
    }
}
console.log("배열의 홀수 합계: " + sum);

document.write("<ul>");
for (let i = 0; i < 10; i++) {
    document.write("<li><b>반갑습니다</b><br></li>"); // document 창에 출력
}
document.write("</ul>");

// document.write("<p></p>");
document.write("<h3>마우스를 올리면 선명하게 보입니다.</h3>");
document.write("<a href='http://www.google.com'>구글 열어봐요</a>");
document.write("<p></p>")
document.write("<img src=images/pic1.jpg>");