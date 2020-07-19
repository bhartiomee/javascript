console.log("hello world")
//Object literal for creating object
let car={
    name:"Maruti 800",
    topSpeed:89,
    run: function (){
        console.log("car is running");
    }
}
// /Creating constructor
function GeneralCar(givenName,givenTopSpeed){
    this.name=givenName;
    this.topSpeed=givenTopSpeed;
    this.run=function(){
        console.log(`${this.name} is running`);
    }
    this.analyze=function(){
        console.log(`This car is slower by ${200-this.topSpeed} than Mercedes`)
    }
}
car1=new GeneralCar('nissan',478)
car2=new GeneralCar('Alto',677)

console.log(car)