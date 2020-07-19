console.log("this is fetchApi.js")

let myBtn = document.getElementById('myBtn')
// myBtn.addEventListener('click',getData)


let content = document.getElementById('content')

// function getData(){
    console.log("started getData()")
    url='omee.txt'
    fetch(url).then((response)=>{
        return response.text();
    }).then((data)=>{
        console.log(data);
    })



//GET REQUSET
function getData(){
    console.log("started getData()")
    url='https://api.github.com/users'  //json api
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}



//POST REQUEST
function getData() {
    console.log("started getData()")
    url = 'http://dummy.restapiexample.com/api/v1/create';//json api
    data = ` {
        "name": "test2222111",
        "salary": "123",
        "age": "232",
        "id": 25
    }`

    params = {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: data
    }


   fetch(url,params).then(response=>response.json())
   .then(data=>console.log(data))
}


console.log("before getData")
getData();