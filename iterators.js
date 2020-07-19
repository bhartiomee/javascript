console.log('This is iterators.js');

//ITERATOR

function fruitIterator(values) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < values.length) {
                //return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }


            } else {
                return {
                    done: true
                }

            }
        }
    }
}


let myArray = ['MANGO', 'BANANA', 'GUAVA', 'ORANGE', 'LITHCI']
console.log(myArray);
const fruit = fruitIterator(myArray)
console.log(fruit.next())
console.log(fruit.next())
console.log(fruit.next())
console.log(fruit.next())
console.log(fruit.next())
console.log(fruit.next())
