console.log('This is regularExpression.js');

//Functions to match expressions

//FUNCTION 1. exec()-This is return array for mathc or null for no match. 

let s = 'This is omee bharti, Omee says hello'
let reg = /omee/ //If we write like this it  will give only first occurence
let result = reg.exec(s);
console.log(result);



let s = 'This is omee bharti, omee says hello'
let reg = /omee/g //g means global If we write like this it  will give all occurence
let result = reg.exec(s); //we can use ultiple exec() with global flag
console.log(result);//first occurence
result = reg.exec(s);
console.log(result);//second occurence


let reg = /omee/i //i means case insensetive
let s = 'This is Omee bharti, Omee says hello'
let result = reg.exec(s);
console.log(result);

console.log(reg) //returns /omee/
console.log(reg.source); //returns 'omee'

//THE OUTPUT:eg--> ["omee", index: 8, input: "This is omee bharti, Omee says hello", groups: undefined]

if (result) {
    console.log(result.input);
    console.log(result.index);
}//if we dont check this is and result is null then it will give an error


//FUNCTION 2. test()-->This is return true for mathc or false for no match.
let result2 = reg.test(s);
console.log(result2);



//FUNCTION 2. match()-->This is return ARRAY OF RESULTS for match or null for no match.

let result2 = s.match(reg); //here we give reg in parameter and string in object(places exchanged)
console.log(result2);

//In match() for global we need not write multiple match() functions like exec(), 
// it autmatically returns all occurences,eg:
// (2) ["omee", "omee"]
// 0: "omee"
// 1: "omee"
// length: 2
// __proto__: Array(0)


//FUNCTION 2. match()-->This is return INDEX OF FIRST(also for global first only) RESULT for match or -1 for no match.

let result2 = s.search(reg); //here we give reg in parameter and string in object(places exchanged)
console.log(result2);

//FUNCTION 2. replace()-->This is return string after all replacent(for global) and first replacemnt without global


let result2 = s.replace(reg,'abcd'); 
console.log(result2);

// OUTPUT:
// This is abcd bharti, abcd says hello -->FOR GLOBAL
// This is abcd bharti, Omee says hello -->FOR NON GLOBAL







