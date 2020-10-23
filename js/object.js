//object.js
let person1 = {
    firstName: 'kildong',
    lastName: 'hong',
    age: 15,
    setName: function (name) {
        this.name = name;
    },

    fullName: function () {
        return this.firstName + ', ' + this.lastName;

    }
}

person1.firstName;
person1.lastName;
console.log(person1.lastName)
person1.fullName;
console.log(person1.fullName());
person1.setName('Nice');



let str = new String('hello');
let newStr = str.replace('ll', 'rr');
console.log(newStr);
console.log(str.length);



let text = 'Pleae locate where "locate" occurs!';

let loc = text.indexOf('locate');
if (loc != -1) {
    console.log("indexOf:" + loc);
} else {
    console.log("값을 찾을 수 없습니다.")
}

let subString = text.substring(0, 5);
console.log("subString:" + subString);

let subStr = text.substr(7, 6);
console.log("substr:" + subStr);

let strSlice = text.slice(-15, -9);
console.log("strSlice:" + strSlice);
console.log(text);

let url = "http://www.daum.net";
let firstPos = url.indexOf('.');
let lastPos = url.lastIndexOf(',');
console.log(url.substring(firstPos + 1, lastPos));
console.log(url.substring(lastPos + 1));

let ary = 'apple, melon, mango, banana';
let strAry = ary.split(',');
for (let str of strAry) {
    console.log(str);
}


let str1 = 'Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.'
let str1Ary = str1.split(' ');
let newText = document.getElementById('new');
for(let str of str1Ary) {
    newText.innerHTML += '<button>' + str + '</button>';
}

