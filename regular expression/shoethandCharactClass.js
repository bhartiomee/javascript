console.log('This is shorthandChracterClass.js AND ALSO ASSERTIONS');

let s = 'Hey   there harhar999 mahadev, Omee says hello'
let reg = /\war/      //any character(ONE) or _ - or number before 'ar'

let reg = /\w+ar/     //any character(ONE OR MORE) or _ - or number before 'ar'

let reg = /\W+ar/     //any non character or _ - or number before 'ar'

let reg = /\d9/       //\d matches one digit. This one matches '9'

let reg = /\d+9/      //more than one digit

let reg = /\D999/     //digit followed by ONE non-digit charater

let reg = /\D+999/    //digit followed by MORE THAN ONE non-digit charater

let reg = /\shar/     //\s means white-space 

let reg = /\s+there/  //more than white-space

let reg = /\S+there/     //no white-space

let reg = /\Sthere/     // one non-white space

let reg = /there\b/        // word boundary,means matches if there is a ord after "there"




let result = reg.test(s);

console.log(reg.exec(s))

if (result) {
    console.log(`${reg.source} matches ${s}`);
}
else {
    console.log(`${reg.source} DOES NOT match ${s}`);
}



//ASSERTIONS

let s = 'Hey there Harhar999 mahadev, Omee says hello'
let reg = /H(?=e)/ //matches for the word where 'H' is followed by "e"

let reg = /H(?!e)/    // DOES NOT matche for the word where 'H' is followed by "e"



let result = reg.test(s);

console.log(reg.exec(s))

if (result) {
    console.log(`${reg.source} matches ${s}`);
}
else {
    console.log(`${reg.source} DOES NOT match ${s}`);
}


