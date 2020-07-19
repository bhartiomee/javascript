console.log("this is synchronous and asynchronous tutorial")

// Asynchronous way
setTimeout(() => {

    for (let index = 0; index < 4009; index++) {
        const element = index;
        console.log("This is index number" + index)

    }
},100)
console.log("done printing")

//synchornous way of writing

for (let index = 0; index < 4009; index++) {
    const element = index;
    console.log("This is index number" + index)

}
console.log("done printing")
