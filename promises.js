console.log("This is promise.js")

// Promise can we resolved,rejected,pending

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Your promise has been resolved')
                resolve();
            }
            else {
                console.log('Your promise has not been resolved')
                reject("sorry not fufilled");
            }

        }, 1000);

    })
}


func1().then(function(){
    console.log("Harry:Thanks for resolving")
}).catch(function(){
    console.log("Very bad bro")
})
