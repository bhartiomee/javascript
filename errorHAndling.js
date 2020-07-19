console.log("This is errorHandling.js")

let a='omee'
a=undefined;

if(a!=undefined){
    throw new Error('This is not undefied')
}
else{
    console.log('This is undefined')
}

try {
    console.log('we are inside try block');
    bharti();
    
}
 catch (error) {
    console.log('error occured')
    console.log(error)
    console.log(error.message);
    console.log(error.name)
    
    
}