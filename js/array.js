// //array.js

// let intAry = [34, 52, 58, 22, 19, 30];

// // 1. index를 활용해 배열의 총합. 215
// let sum1 = 0;
// for (let i = 0; i < intAry.length; i++) {
//     sum1 += intAry[i];
// }
// console.log(sum1);



// //2.확장 for이용해 배열의 총합.
// let sum2 = 0;
// for (let sum of intAry) {
//     sum2 += sum;
// }

// console.log(sum2);


// //3. 숫자리스트 document영역에 리스트로 보여주기.
// // let ul = document.createElement('ul');
// // for (let arr of intAry) {
// //     let li = document.createElement('li');
// //     li.innerHTML = arr;
// //     ul.append(li);
// // }
// // console.log(ul);


// let ul = '<ul>';
// for (let arr of intAry) {
//     let li = '<li>' + arr + '</li>';
//     ul += li;
// }
// ul += '</ul>';
// document.write("첫번째 배열" + ul);
// document.write("첫번째 배열 합계: " + sum2 + '<br>' + '<br>');


// //4. 숫자 35, 88을 배열의 마지막 위치에 추가.
// object 추가는 .push({1,2,3});
// intAry.push(
//     35,
//     88
// );
// console.log(intAry);


// //5.합의 리스트의 마지막을 보여주기.
// let ulTag = '<ul>';
// for (let arr2 of intAry) {
//     let liTag = '<li>' + arr2 + '</li>';
//     ulTag += liTag;
// }
// ulTag += '</ul>';
// document.write("두번째 배열" + ulTag);


// let asum = 0;
// for (let sum3 of intAry) {
//     asum += sum3;
// }
// document.write("두번째 배열 합계: " + asum);



// let strAry = ['Kim', 'Shin', 'Seo', 'Do'];
// // for(let i=0; i < strAry.length; i++) {}
// for (let j of strAry) {
//     console.log(j);
// }



// let boolAry = [true, false, true, 'a', 0]; //true 3개(a포함)
// let times = 0;
// for (let var1 of boolAry) {
//     if (var1) {
//         console.log(times++);
//     }
// }
// console.log(times);



//배열에 object담기
// let p0 = {
//     name: '이름',
//     age: '나이'
// }
let p1 = {
    name: 'Hong',
    age: 15
}
let p2 = {
    name: 'Hwang',
    age: 20
}
let p3 = {
    name: 'Park',
    age: 25
}

let persons = [];
// persons.push(p0);
persons.push(p1);
persons.push(p2);
persons.push(p3);




// let tableTag = '<table border=1>';
// tableTag += '<tr><th>이름</th><th>나이</th></tr>';
// for (let pe of persons) {
//     tableTag += '<tr><td>' + pe.name + '</td><td>' + pe.age + '</td></tr>'
// }
// tableTag += '</table>';
// console.log(tableTag);
// let show = document.getElementById('show');
// show.innerHTML = tableTag;



let show = document.getElementById('show');
let table = document.createElement('table');
table.setAttribute('border', '1px');
let tr = document.createElement('tr');
let th = document.createElement('th');
th.innerHTML = "이름";
let th2 = document.createElement('th');
th2.innerHTML = "나이";
tr.append(th);
tr.append(th2);
table.append(tr);
for (let pers of persons) {
    let tr2 = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = pers.name;
    let td2 = document.createElement('td');
    td2.innerHTML = pers.age;
    tr2.append(td);
    tr2.append(td2);
    table.append(tr2);
}
console.log(table);
show.append(table);
// document.write(table);