
let div1 = document.createElement('div');
div1.setAttribute('class', 'v1');
let img1 = document.createElement('img');
img1.setAttribute('src', '/images/pic1.jpg')

let div2 = document.createElement('div');
div2.setAttribute('class', 'v2');
let img2 = document.createElement('img');
img2.setAttribute('src', '/images/pic1.jpg')

let div3 = document.createElement('div');
div3.setAttribute('class', 'v3');
let img3 = document.createElement('img');
img3.setAttribute('src', '/images/pic1.jpg')

let div4 = document.createElement('div');
div4.setAttribute('class', 'v4');
let img4 = document.createElement('img');
img4.setAttribute('src', '/images/pic1.jpg')



div1.append(img1);
div2.append(img2);
div3.append(img3);
div4.append(img4);

let bdy = document.getElementById('bdy');   //id를 알때
let bdy = document.querySelectorAll('#bdy');    //전체
bdy[0].append(div1);
bdy[1].append(div2);
bdy[2].append(div3);
bdy[3].append(div4);
