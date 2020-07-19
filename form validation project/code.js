console.log('This is code.js for form validation project');

const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')

let validName = false;
let validPhone = false;
let validEmail = false;

// $('#failed').hide();
$('#success').hide();

// console.log(name,email,phone);

name.addEventListener('blur', () => {
    console.log('name is blurred');
    //validate name here

    let regex = /^[a-zA-Z][a-zA-z0-9]{0,10}/
    const string = name.value;
    console.log(regex, string)

    if (regex.test(string)) {
        console.log('matched');
        validName = true
        name.classList.remove('is-invalid')
    }
    else {
        console.log('not matched');
        validName = false;
        name.classList.add('is-invalid')

    }
})

email.addEventListener('blur', () => {
    console.log('email is blurred');
    //validate email here
    let regex = /^([a-z_A-Z0-9\-\.]+)@([a-z_A-Z0-9\-\.]+)\.([a-zA-Z]){2,7}$/
    const string = email.value;
    console.log(regex, string)

    if (regex.test(string)) {
        console.log('matched');
        validEmail = true;
        email.classList.remove('is-invalid')
    }
    else {
        console.log('not matched');
        validEmail = false
        email.classList.add('is-invalid')

    }
})

phone.addEventListener('blur', () => {
    console.log('phone is blurred');
    //validate phone here

    let regex = /^[6789][0-9]{9}$/
    const string = phone.value;
    console.log(regex, string)

    if (regex.test(string)) {
        console.log('matched');
        validPhone = true
        phone.classList.remove('is-invalid')
    }
    else {
        console.log('not matched');
        validPhone = false
        phone.classList.add('is-invalid')

    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Submit clicked');
    let success = document.getElementById('success')
    let failed = document.getElementById('failed')
    if (validEmail && validName && validPhone) {

        failed.classList.remove('show')
        success.classList.add('show')
        $('#failed').hide();
        $('#success').show();
    }
    else {

        success.classList.remove('show')
        failed.classList.add('show')
        $('#success').hide();
        $('#failed').show();
    }


})