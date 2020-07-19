console.log('This is javascrpit_dstructing');


let a, b, c;
[a, b] = [34, 564];
// console.log(a, b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

console.log(a)
console.log(b)
console.log(c)
console.log(d)

// ARRAY DESTRUCTURING

({ a, b, c, ...d } = { a: 31, b: 32, c: 43, d: 90, e: 11 }) //the variable after ... acts like an object and stores
//all the extra values
console.log(a, b, c, d)

const fruits = ['Apple', 'Mango', 'Banana'];
[a, b, c] = fruits;
console.log(a, b, c)

//-------------------------------------------

// OBJECT DESTRUCTURING

const data = {
    name: 'Omee Bharti',
    age: 20,
    gender: 'female',
    Language: 'Javascrpit',
    start: function () {
        console.log('started');
    }
}

const { name, age, gender, Language, start } = data
console.log(name, age, gender, Language, start)