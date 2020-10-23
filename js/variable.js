//variable.js
// let var1 = 10;
// var1 = 'hello';
// var1 = 20;
// console.log(typeof var1);

// var var2 = 20;
// var var2 = 'hello';
// console.log(var2);  // var 변수보다 let 변수 사용권장.

// const var2 = '20';  
// var2 = 20;  // 값이 한번 할당 후 제한.(상수)
// let var2 = '20'; // (변수)


let num1 = 10;
let num2 = '10';


if (num1 == num2) { //==:값 체크, ===:값과 타입 체크.
    console.log('same'); //타입이 선언되지 않아 값이 같다고 출력됨.
} else {
    console.log('diff');
}


let trueOrFalse = true;
if (trueOrFalse) {
    console.log(true);
}


num2 = 'hello';
let num3;
if (num2) {
    console.log(true);
} else {
    console.log(false);
}
console.log(typeof num3); // undefined.(값->object)





let person = {
    name: 'Hong',
    age: 20,
    score: 80
}
person.hobby = 'reading'; // person에 추가.


console.log(person.name);
console.log(person.age);
console.log(person);


let persons = [person, {
    name: 'Hwang',
    age: 25,
    score: 90
}];
// 여러타입이 담기지만 웬만하면 통일.
console.log(persons);
// (2) [{…}, {…}] : 2개의 object
console.log(persons[0].name + persons[1].age);


persons.push({
    name: 'Choi',
    age: 27,
    score: 100
}); // push: 배열의 메서드.

persons[persons.length] = {
    name: 'Park',
    age: 22,
    score: 88
};


console.log('persons length:' + persons.length);


// for(let i = 0; i < persons.length; i++) {
for (let per of persons) {
console.log(per.name + ',' + per.age + ',' + per.score);
}


//방법1. html문서 활용하여 출력.
let ul = document.createElement('ul');
let show = document.getElementById('show');
show.append(ul);
for(let p of persons){
let li = document.createElement('li');
ul.append(li);
li.innerHTML = p.name;
console.log(li);
}


//방법2. 웹에 바로 출력.
let ulTags = '<ul>' + '<br>';

for(let i = 0; i < persons.length; i++) {
    let liTags = '<li>' + persons[i].name + '</li>';
    ulTags += liTags;
}
ulTags += '</ul>';
document.write(ulTags);
console.log(ulTags);


