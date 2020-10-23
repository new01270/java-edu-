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
fruits.forEach(function (a, b, c) {
    // console.log(a, b, c);
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


intAry.forEach(function(a, b, c) {
    if(b % 2 == 0) {
        sum += a;
    }
    // sum += a;

});


console.log(sum);
