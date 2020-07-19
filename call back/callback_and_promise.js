console.log("This is call back")

//pretend that this resposnse is coming from server
const students = [

    { name: "omee", subject: "JAvascript" },
    { name: "Bharti", subject: "Python" }
]

function enrollStudent(student) {
   
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            const error=false;
            students.push(student);
            console.log("student has been enrolled")

            if(!error){
            resolve();//here we can also give the function we want to call if no error occurred..in this case getStudent()
            }
            else{
                reject();//the catch part 
            }

        }, 3000)
        
    })
}

function getStudent() {
    setTimeout(function () {
        let str = ""
        students.forEach(function (student) {
            str += `<li>${student.name}</li>`
        })
        document.getElementById('student').innerHTML = str;
        console.log("student has been fetch")
    }, 1000)
}


let newStudent = { name: "om", subject: "java" }
enrollStudent(newStudent).then(function(){
    getStudent()
}).catch(function(){
    console.log("some error occured")
})
// getStudent();