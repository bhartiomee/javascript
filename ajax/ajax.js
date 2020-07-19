console.log("This is ajax tutorial")

let fechBtn = document.getElementById('fetchBtn')

fechBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log("You have clicked fetch button")

    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    //send post request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getAllResponseHeaders("content-type", 'application/json');

    //WHat do to on progress(optional)
    xhr.onprogress = function () {
        console.log('on progress')
    }

    //What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText)
        }
        else
            console.log('some error occurred')
    }
    params =`"name":"test","salary":"123","age":"23"`
    xhr.send(params);

    // http://dummy.restapiexample.com/api/v1/employees
}

let popBtn = document.getElementById('popBtn')
popBtn.addEventListener('click', popHandler)

function popHandler(){
    console.log("You have clicked populate button")

    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //Open te object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    //What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {

            let obj=JSON.parse(this.responseText)
            console.log(obj);
            let list=document.getElementById('list')
            let str="";
            for(key in obj.data){
                
                str+=`<li>${obj.data[key].employee_name}</li>`
            }
            list.innerHTML=str;
        }
        else
            console.log('some error occurred')
    }
    
    xhr.send();
    console.log("done")

    

}

