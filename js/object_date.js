//object_date.js

document.getElementById('result').innerHTML = new Date(2020, 09, 23, 10, 15, 22); //10월출력

let showBtn = document.getElementById('showBtn');
showBtn.onclick = function () {

    let year = document.querySelector("input[name='year']").value;
    let month = document.querySelector("input[name = 'month']").value;
    let day = document.querySelector("input[name = 'day']").value;

    console.log(year, month, day);
    let today = new Date(year, month-1, day);
    console.log(today.getDay()); // 조회한 달의 다음달첫요일
    console.log(today.getDate()); // 조회한 달의 마지막일
    document.getElementById('result').innerHTML = today;

    //달력만들기
    //해당월의 전체일수 : totalDay
    //해당월의 1일의 요일정보 : firstDay
    let totalDay = new Date(year, month, 0);
    totalDay = totalDay.getDate();
    console.log(totalDay);
    let firstDay = new Date(year, month-1, 1);
    firstDay = firstDay.getDay();  //7-today.getDay()
    console.log(firstDay);
    let calTag = '<table border="1">';
    calTag += '<tr></td></td></td></td>'; //</td>첫날의 공란만큼
    for (let i = 1; i <= totalDay; i++) {
        calTag += '<td>' + i + '</td>';
        if (i % 7 == firstDay) {
            calTag += '</tr><tr>'
        }
    }
    calTag += '</tr></table>';

    document.getElementById('result').innerHTML = calTag; //화면에 만든 calTag를 넣음.

} //end