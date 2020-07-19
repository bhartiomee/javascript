console.log("Hello world");

class Employee {
    constructor(givName, givExperience, givDivision) {
        this.name = givName
        this.experience = givExperience
        this.division = givDivision

    }
    slogan(){
        return `I am ${this.name} and this company is the best`
    }
    experienceFrom2000(){

    }
    joiningYear(){
        return  `Your joining year is ${2020-this.experience}`
    }

    //we are not using any parameters of the constructors so static
    static add(a,b){
        return a+b;
    }

}

omee=new Employee("omee",56,"second")
console.log(omee.joiningYear())

class Programmer extends Employee{
    constructor(givName,givDivision,givExperience,language,github){
        super(givName,givExperience,givDivision);
        this.language=language;
        this.github=github
    }

    favoriteLanguage(){
        if(this.language=="python"){
            return 'Python'
        }
        else{
            return "javascript";
        }

    }
    static multiply(a,b){
        return a*b;
    }
}
let rudra =new Programmer("Rudra","second",23,"python","geeky_rudra")
console.log(rudra)
console.log(Programmer.multiply(2,3))//this is how to use static methods
