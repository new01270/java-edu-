//event.js

let buttons = document.querySelectorAll('#new>button')
// console.log(buttons)


for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = clickFunc;
    buttons[i].onmouseover = overFunc;
    buttons[i].onmouseout = outFunc;
};

function clickFunc() {
    alert(this.innerHTML);
}

function overFunc() {
    this.style.background = "pink";
}

function outFunc() {
    this.style.background = null;
}





let onBtn = document.getElementById('turnOn');
onBtn.onclick = function () {
    let img = document.querySelector('#show>img');
    img.setAttribute('src', 'images/on.gif');
}
onBtn.onmouseover = function () {
    onBtn.style.background = "greenyellow";
    onBtn.style.color = "blue";
}
onBtn.onmouseout = function () {
    // onBtn.style.background = "white";
    // onBtn.style.color = "black";
    onBtn.style = null;
}
// console.log(onBtn);




let offBtn = document.getElementById('turnOff');
offBtn.onclick = function () {
    let img = document.querySelector('#show>img');
    img.setAttribute('src', 'images/off.gif');
}
offBtn.onmouseover = function () {
    offBtn.style.background = "yellowgreen";
    offBtn.style.color = "white";
}
offBtn.onmouseout = function () {
    offBtn.style.background = "white";
    offBtn.style.color = "black";
}
// console.log(offBtn);