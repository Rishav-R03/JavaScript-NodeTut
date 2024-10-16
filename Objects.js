function multiply(a, b) {
    return a * b;
}
multiply.power = 2;
console.log(multiply(10, 20));
console.log(multiply.power);
console.log(multiply.prototype);

//js mei har chiz object hoti hai
//function functio bhi hai aur object bhi hai
/**
 *Regular Function vs Arrow Function
Regular function (function): When you define a method using a regular function, 
the value of this is dynamically bound to the object that calls the function.
 In your case, it's bound to the createUser instance (e.g., chai or tea).

Arrow function (=>): Arrow functions, on the other hand, do not have their own this. 
Instead, they inherit this from the surrounding lexical context (i.e., the scope in which the function is defined). 
This means that in the context of your class-like structure, when you use an arrow function, 
this will refer to the global object or the surrounding scope, not the specific createUser instance. 
 *
 */

/**
 * 
 * Summary of What new Does:
Creates a new object.
Links the new object's prototype to the constructor's prototype.
Sets this to the newly created object within the constructor.
Returns the new object automatically.
Using the new keyword ensures that the constructor works as 
intended to create individual instances of an object, each with its own properties. 
 */
function createUser(userName,score){
    this.userName = userName
    this.score = score

}
createUser.prototype.increment = function(){
    this.score += 1 //jisne bhi bulaya uska score increment kardo
}
createUser.prototype.printScore = function(){
    console.log(`${this.userName} score is ${this.score}`);
}
const chai = new createUser("chai",10)
const tea = new createUser("tea",10)
chai.printScore();
chai.increment();
chai.printScore();

//js new keyword k through object create krta hai

//prototype

let myName = "Rishav"
console.log(myName.length);
// console.log(myName.trueLength);

//problem create a method to get trueLength of strings

let myHeros = ["Superman","Batman","Spiderman"]
let heroPower = {
    superman : "flight",
    batman : "money",
    spiderman : "sling",
    getSpiderPower: function(){
        console.log(`spiderman can ${this.spiderman}`);
    }
}

Object.prototype.rishav = function(){
    console.log(`Rishav is present in all powers`);
}

myHeros.rishav();

//inheritance 

const teacher = {
    makesVid :true
}
const teacherSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: "Js ",
    fullTime: true,
    __proto__: teacherSupport
}

teacher.__proto__ = teacherSupport // prototype inheritance
//above method is bit old

//modern syntax

Object.setPrototypeOf(TASupport, teacherSupport);//TASupport inherits from teacherSupport

let anotherUser = "Chaiaurcode       "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`The true length of the string is ${this.trim().length}`)
}
anotherUser.trueLength() 
