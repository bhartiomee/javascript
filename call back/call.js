console.log("This is call back")

//pretend that this resposnse is coming from server
const students = [

    { name: "omee", subject: "JAvascript" },
    { name: "Bharti", subject: "Python" }
]

function enrollStudent(student,callback) {
    setTimeout(function () {
        students.push(student);
        console.log("student has been enrolled")
        callback();
    }, 3000)
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
enrollStudent(newStudent,getStudent)
// getStudent();