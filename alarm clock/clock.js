console.log('This is clock.js');

let errorDisplay = document.getElementById('error-box')

//SHOW PART
var time = new Date();

let presentDate = document.getElementById('current-date');
presentDate.innerHTML = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`
let Time = document.getElementById('current-time');
var h;
var m;
var s;

function startTime() {
    var today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    Time.innerHTML = `${h} : ${m}:${s}`
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

//ALARM APP MAIN WORK
let validHr = false;
let validMin = false;
let validSec=false;


let hourInput = document.getElementById('alarm-hour')
hourInput.addEventListener('blur', () => {
    console.log('blur hr');
    let string = hourInput.value;
    const regex = /^[0-1][0-9]|2[0-3]$/;
    let result = regex.exec(string);
    if (regex.test(string)) {
        validHr = true;
        hourInput.style.border = 'none'
    }
    else {
        hourInput.style.border = '2px solid red'
    }
    // console.log("hour", validHr);
})

let minInput = document.getElementById('alarm-min')
minInput.addEventListener('blur', () => {
    console.log('blur sec');
    let string = minInput.value;
    let regex = /^[0-5][0-9]$/;
    let result = regex.exec(string)
    if (regex.test(string)) {
        validMin = true;
        minInput.style.border = 'none';
    }
    else {
        minInput.style.border = '2px solid red'
    }
    // console.log("sec",validMin);
})
let secInput = document.getElementById('alarm-sec')
secInput.addEventListener('blur', () => {
    console.log('blur sec');
    let string = minInput.value;
    let regex = /^[0-5][0-9]$/;
    let result = regex.exec(string)
    if (regex.test(string)) {
        validSec = true;
        secInput.style.border = 'none'
    }
    else {
        secInput.style.border = '2px solid red'
    }
    // console.log("sec",validMin);
})
const audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
audio.muted = true;
function play() {

    audio.play();
}

let setBtn = document.getElementById('btn')

setBtn.addEventListener('click', setAlarm)

function setAlarm(e) {
    e.preventDefault()
    console.log('alarm set');
    setHr = (parseInt(hourInput.value) * 3600);
    setMint = (parseInt(minInput.value) * 60);
    setSec = parseInt(secInput.value);
    if (validHr && validMin && validSec) {
        errorDisplay.style.display='none'
        let alarm = setHr + setMint + setSec;
        let now = (h * 3600) + (m * 60) + s;


        let ringTime = alarm - now;
        ringTime = ringTime * 1000;
        console.log(ringTime);
        // console.log('alarm set for',setHr,":",setMint,":",setSec);
        // console.log('alarm set at', Date());

        if (ringTime >= 0) {
            setTimeout(() => {
                console.log('ringing');
                audio.muted = false;
                play();
            }, ringTime)
        }
        else {
            console.log('not valid alarm');

        }
    }
    else{
        errorDisplay.style.display='block'
    }

}






