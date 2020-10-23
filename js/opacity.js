// opacity.js
//<body><div>Hello</div></body>
let divTag = document.createElement('div'); //'div' tag를 divTag변수에 담는다
divTag.setAttribute('class', 'background'); // class와 클래스명 지정

let divBox = document.createElement('div');
divBox.setAttribute('class', 'box');

let pTag = document.createElement('p');
pTag.innerHTML = 'HTML5 웹 프로그래밍';


divTag.append(divBox);
divBox.append(pTag);    //안에 집어넣는다


console.log(divTag);
console.log(divBox);
console.log(pTag);


let bdy = document.querySelectorAll('#bdy'); //id가 bdy인 요소를 찾는다
bdy[0].append(divTag); // bdy의 아래에 첨부한다-> bdy[0]은 첫번째 요소


console.log(bdy);//


let per1 = {
    name: 'Hong',
    age: 20,
    hobby: 'reading'
}

per1.name;
per1['name'];