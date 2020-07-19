console.log("protoype inheritance")

const proto={
    slogan:function(){
        return `This compamy is the best`;
    },
    changeName:function(newName){
        this.name=newName

    }

}

//This creates omee object
const omee =Object.create(proto);
omee.name="Omee"
omee.role="programmer"
omee.changeName("bharti")
// console.log(omee)


//Employee constructor

function Employee(givName,givSalary,givExperience){
    this.name=givName;
    this.salary=givSalary;
    this.experience=givExperience;
}

//Slogan
Employee.prototype.slogan=function(){
    return `This compamy is the best. Reagards ${this.name}`;
}

let omee1 =new Employee('Omee',265615765,19);
console.log(omee1)

//programmer

function programmer(name,salary,experience,lanuage){
    Employee.call(this,name,salary,experience); //inherit Employee
    this.lanuage=lanuage;
}

//Inherit the prototype

programmer.prototype=Object.create(Employee.prototype);

//Manually set constructor
programmer.prototype.constructor=programmer;

let omeeObj=new programmer('bharti',234567,34,'Javascript')
console.log(omeeObj)

