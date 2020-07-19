console.log('This is javascriptMaps.js');

const myMap = new Map();
const key1 = 'myString', key2 = {}, key3 = function () { }

//settig map values

myMap.set(key1, 'This is my string')
myMap.set(key2, 'This is blank object')
myMap.set(key3, 'Ths is a blank function')

console.log(myMap);

//getting values from the map

let value1 = myMap.get(key2)
console.log(value1)

//get the size
console.log(myMap.size)

//we can also use for of loop to get the keys and values
for (const [key, value] of myMap) {
    console.log(key, value)
}
//--------------------------------------------------------------

//get only keys

for (const keys of myMap.keys()) {
    console.log('The key is', keys)
}
//-------------------------------------------------------------------
//get only values

for (const values of myMap.values()) {
    console.log('The value is', values)
}
//-----------------------------------------------------------------------
//using forEach loop
myMap.forEach((value, key) => { //irst we will write value then key in parameter
    console.log('The key is', key)
    console.log('The value is', value)
})

//-------------------------------------------------------------------------------

//CONVERTING THE MAP TO ARRAY

let ar = Array.from(myMap)
console.log('The array is', ar)


let arKey = Array.from(myMap.keys())
console.log('The keys of array are', arKey)


let arVal = Array.from(myMap.values())
console.log('The value of array are', arVal)