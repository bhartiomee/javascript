console.log('This is Async_Await.js');

async function omee(){
    console.log('inside response')
    const response=await fetch('https://api.github.com/users')
    console.log('before response')
    const users=await response.json();
    console.log('response resolved')
    return users;
}

console.log('befor calling omee()')
let a= omee();
console.log('after calling omee()')
console.log(a)
a.then(data=> console.log(a,data))
console.log("completed omee()")