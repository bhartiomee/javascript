console.log('This is wall_clock.js')
let wall = document.getElementById('clock');

let h, m, s;
function showTime() {

    let time = new Date();
    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();

    let amPm = (h < 12) ? 'AM' : 'PM';
    
    m=(m<10?"0":"")+m;
    s=(s<10?"0":"")+s;

    h=(h>12)?(h-12):h;
    h=(h==00)?12:h;

    wall.innerHTML = `${h}:${m}:${s} ${amPm}`
     setInterval(showTime, 1000)
}

showTime()