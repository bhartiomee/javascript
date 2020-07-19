console.log('this is generators.js');

function* numeberGen() {
    let i = 0;

    while (true) {
        yield i++;
    }
}

const gen = numeberGen()

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next().value)
