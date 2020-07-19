console.log('This is for...in and for..of loop.js');

let people = ['Omee', 'Anshu', 'Avinash', 'Aasif', 'Bhaskar', 'Raju'];

// FOR LOOP

for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element);

}
//----------------------------------------
// FOR EACH LOOP

people.forEach(element => {
    console.log(element);   
});
// -------------------------------------
// FOR IN

for (const key in people) {
        console.log(people[element]); 
}
//---------------------------------
//FOR-OF

for (const name of people) {
    console.log(name);
}

let obj = {
    name: 'Omee',
    Laguage: 'JavaScript',
    Age: '20'
}

// ITERATING AN OBJECT WITH FOR LOOP

for (let index = 0; index < Object.keys(obj).length; index++) {
    const element = obj[Object.keys(obj)[index]];
    console.log(element);

}
//------------------------------------------------------
//ITERATING AN OBJECT WITH FOR-IN LOOP

for (const key in obj) {
    const element = obj[key];
    console.log(element);
}

let myString="This is my string"

for (let char in myString) {
        console.log(myString[char]);
    }
//-----------------------------------------------------------------
for (let index = 0; index < myString.length; index++) {
    const element = myString[index];
    console.log(element);   
}
//-----------------------------------------
let ar=myString.split(' ')
ar.forEach(element => {
    console.log(element);  //prints each word of the string
});


