//multiply.js

document.getElementById('show');

for(let i = 1; i <= 9; i++){
    for(let j = 2; j <= 5; j++){
        // document.write('<div>' + j + ' * ' + i + ' = ' + i * j + '</div>');    
        //writeln으로 출력하면 한 칸 띄워서 나타남. 줄바꿈은 <br>
        let div = document.createElement('div');
        div.innerHTML = j + ' * ' + i + ' = ' + (i * j);
        show.append(div);
    }

    // document.write('<div class="row"></div>');
    let row = document.createElement('div');
    row.setAttribute('class','row');
    show.append(row);
}