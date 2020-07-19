console.log('This is chracterSet.js and this also contains quantifiers and grouping');


let s = 'Hey there omee bharti, Omee says hello'
let reg = /o[a-z]ee/;  // matches if the characters in from a to z.

let reg = /o[mno]ee/;//matches if any m,n or o is there.

let reg = /o[^mno]ee/ //here ^ means excluding m,n and o.

let reg = /o[^mno]e[adef]/ //can have multiple chracter set 

let reg = /o[a-zA-Z]e[adef0-9]/ // it will match a-z orA-Z and  a,d,r,f 0-9

let result = reg.test(s);

console.log(reg.exec(s))

if (result) {
    console.log(`${reg.source} matches ${s}`);
}
else {
    console.log(`${reg.source} DOES NOT match ${s}`);
}


// QUANTIFIERS(if we want to specify the no of repeatition of a charcter)

let s = 'Hey there omee bharti, Omee says hello'
let reg = /ome{2}/ //mactches for exactly 2 'e'

let reg = /ome{0,2}/ //mactches for 0,1 or 2 'e' 

let result = reg.test(s);

console.log(reg.exec(s))

if (result) {
    console.log(`${reg.source} matches ${s}`);
}
else {
    console.log(`${reg.source} DOES NOT match ${s}`);
}



//GROUPINGS

let s = 'Hey there harhar mahadev, Omee says hello'
let reg = /(har){2}/ //mactches for exactly 2 'har'

let result = reg.test(s);

console.log(reg.exec(s))

if (result) {
    console.log(`${reg.source} matches ${s}`);
}
else {
    console.log(`${reg.source} DOES NOT match ${s}`);
}