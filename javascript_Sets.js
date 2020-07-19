console.log('This is javascript_Sets.js')

const mySet = new Set()
console.log('This is initial set', mySet);

mySet.add('this')
mySet.add('is set')

//set does nt accpet duplicate values
console.log('Lately it looks like this', mySet)

let newSet = new Set([1, 45, false, 'omee', { a: 2, b: 45 }])
console.log('This is another way of declarig set', newSet)

console.log(newSet.size)
console.log(newSet.has(45)) //returns true if set cnatins the given value esle returns false
newSet.delete(45)
console.log(newSet)

//ITERATING THROUGH SET
for (item of newSet) {
    console.log('item is', item)
}
newSet.forEach(element => {
    console.log('element is', element)
});

let ar = Array.from(newSet);
console.log(ar)