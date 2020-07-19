console.log('This is javascrpit_symbols.js')

//Symbol is a primitive data type. It is used to make unique keys

const sym1 = Symbol('this is symbol')
const sym2 = Symbol('this is symbol')
console.log(sym1)

console.log(sym1 === sym2) //every symbol with unique name is unique.(this stateentwll reurn false)

const k1 = Symbol('for k1')
const k2 = Symbol('for k2')

myObj = {}
myObj[k1] = 'omee'
myObj[k2] = 'Bharti'
myObj["name"] = "omee bharti"

console.log(myObj)
console.log(myObj[k1])
console.log(myObj.k2)//cannot use this bcz then it will search a string 'k2'.It is same as myObj["k2"] it will not
// return 'bharti' here


// symbols are ignored in for in loop
for (key in myObj) {
    console.log(key, myObj[key]) //it will not print k1 and k2
}                   

console.log(JSON.stringify(myObj)) //here also symbols are ignored