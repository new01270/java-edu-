//visibiliry.js

// ################ 1.for문
// let bdy = document.querySelectorAll('#bdy');    //전체
// let bdy = document.getElementById('bdy'); //선택

// for (let i = 1; i < 5; i++) {
//     let div = document.createElement('div');
//     div.setAttribute('class','v'+ i);
//     let img = document.createElement('img');
//     img.setAttribute('src', '/images/pic1.jpg');
//     div.append(img);
//     bdy.append(div);
// }



// #################### 1. 반복문
// let div1 = document.createElement('div');
// div1.setAttribute('class', 'v1');
// let img1 = document.createElement('img');
// img1.setAttribute('src', '/images/pic1.jpg')

// let div2 = document.createElement('div');
// div2.setAttribute('class', 'v2');
// let img2 = document.createElement('img');
// img2.setAttribute('src', '/images/pic1.jpg')

// let div3 = document.createElement('div');
// div3.setAttribute('class', 'v3');
// let img3 = document.createElement('img');
// img3.setAttribute('src', '/images/pic1.jpg')

// let div4 = document.createElement('div');
// div4.setAttribute('class', 'v4');
// let img4 = document.createElement('img');
// img4.setAttribute('src', '/images/pic1.jpg')



// div1.append(img1);
// div2.append(img2);
// div3.append(img3);
// div4.append(img4);

// let bdy = document.getElementById('bdy');   //id를 알때
// let bdy = document.querySelectorAll('#bdy');    //전체
// bdy[0].append(div1);
// bdy[1].append(div2);
// bdy[2].append(div3);
// bdy[3].append(div4);




// ################ 2. for문 
// let div = document.createElement('div');
// div.setAttribute('class', 'row');

// let ul = document.createElement('ul');
// ul.setAttribute('id', 'first');
// for(let i = 1; i < 4; i++) {
//     let li = document.createElement('li');
//     li.innerHTML = 'menu' + i;
//     ul.append(li);
// }

// let ol = document.createElement('ol');
// ul.setAttribute('id', 'last');
// for(let i = 1; i < 4; i++) {
//     let li = document.createElement('li');
//     li.innerHTML = 'sub' + i;
//     ul.append(li);
// }





// #################### 2.반복문
// let div = document.createElement('div');
// div.setAttribute('class', 'row');

// let ul = document.createElement('ul');
// let li = document.createElement('li');
// let li2 = document.createElement('li');
// let li3 = document.createElement('li');
// li.innerHTML = 'menu1';
// ul.append(li);
// li2.innerHTML = 'menu2';
// ul.append(li2);
// li3.innerHTML = 'menu3';
// ul.append(li3);

// let ol = document.createElement('ol');
// let li4 = document.createElement('li');
// let li5 = document.createElement('li');
// let li6 = document.createElement('li');
// li4.innerHTML = 'sub1';
// ol.append(li4);
// li5.innerHTML = 'sub2';
// ol.append(li5);
// li6.innerHTML = 'sub3';
// ol.append(li6);

// div.append(ul,ol);

// let bdy = document.getElementById('bdy');
// bdy.append(div);
