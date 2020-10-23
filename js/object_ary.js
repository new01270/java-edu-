//object_ary.js

let apples = ['apple'];

apples[apples.length] = 'banana';
apples[apples.length] = 'mango';

apples.push('melon'); //마지막에
apples.push('strawberry');

apples.unshift('grape'); //제일먼저

apples.pop(); //뒤에서 제거
apples.pop();
apples.shift(); //앞에서 제거

// delete apples[1];   //undefined.
apples.splice(1, 1, 'new apple', 'new mango'); //index: 1에서 하나 삭제.


for (let fruit of apples) {
    console.log(fruit);
}


let fruits = ['apple', 'banana', 'mango', 'melon', 'grape'];
let newFr = fruits.slice(0, 3);
console.log(fruits);
console.log(newFr);

for (let i = 0; i < fruits.length; i++) {

}

for (let fruit of fruits) {

}

console.clear();

let tags = '<ul>';
fruits.forEach(function (a, b, c) { //forEach: 배열의 길이만큼 function을 반복실행(배열일때만 사용가능)->function이 매개변수
    // console.log(a, b, c);    //function 의 매개변수: value,index,array
    // if(b % 2 == 0) {
    //     console.log(a, b);
    // }
    tags += '<li>' + a + '</li>';
});
tags += '</ul>';
console.log(tags);


let newBtn = document.getElementById('new');
newBtn.innerHTML += tags;


let intAry = [3, 5, 2, 6, 4, 8, 6];
let sum = 0;


intAry.forEach(function (a, b, c) {
    if (b % 2 == 0) {
        sum += a;
    }
    // sum += a;

});


console.log(sum);



let per1 = {
    name: 'Hong',
    age: 20,
    hobby: 'reading',
    grade: 'A',
}
let per2 = {
    name: 'Hwang',
    age: 21,
    hobby: 'sleeping',
    grade: 'B',
}
let per3 = {
    name: 'Park',
    age: 22,
    hobby: 'cycling',
    grade: 'C',
}

per1.name;
per1['name']; //같은 표현.
per1['age'];
let age = per1['age'];

function getField(obj, field) {
    return obj[field];
    // return obj.field;    // obj의field를 찾겠다 -> undified.
}

name = getField(per1, 'name');
age = getField(per1, 'age');
console.log(name);

for (field in per1) {
    console.log(field);
}


console.clear();
let persons = [per1, per2, per3]; //object담기
let newTag = '<table border=2>';
for (person of persons) {
    newTag += '<tr>';
    // console.log(person); // of::배열의요소를 가져옴.->per1, per2, per3
    for (field in person) {
        if (field == 'name') {
            newTag += '<td style="color:green;">' + person[field] + '</td>';
        } else if (field == 'age') {
            newTag += '<td style="font-weight:bold;">' + person[field] + '</td>';
        } else {
            newTag += '<td>' + person[field] + '</td>';
        }
        // console.log(field); // in::field명을 가져옴->name,age,hobby,grade
        // console.log(person[field]); // field+값  가져옴

    }
    newTag += '<td><button class="btn">OK</button></td></tr>';
}
newTag += '</talbe>';
newBtn.innerHTML = newTag;

let btns = document.querySelectorAll('.btn'); //css선택자 방식으로 클래스(bts)의 요소를 가져옴.
console.log(btns);

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        let trTag = this.parentNode.parentNode;
        // console.log(this.parentNode.parentNode.remove());
        if (trTag.style.background == "greenyellow") {
            trTag.style.background = '';
        }else {
            trTag.style.background = "greenyellow"
        }

    }
}

//getElementsByTagName을 사용해 tr,td 각각을 찾아온다.
let trs = document.getElementsByTagName('td');
for (let i = 0; i < trs.length; i++) {
    trs[i].onmouseover = function() {
        this.style.background = 'skyblue';
    }
    trs[i].onmouseout = function() {
        this.style.background = null;
    }
}