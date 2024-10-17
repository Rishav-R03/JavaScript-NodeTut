/**
 * 
 * @param {*} first 
 * @param {*} last 
 * @param {*} age 
 * @param {*} eyecolor
 * All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype. 
 */

function Person(first,last,age,eyecolor){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
    this.ageView = function(){
        return "The age is " + this.age;
    }
}
const myFather = new Person("P","K",50,"black");
const myMother = new Person("M","S",42,"black");

console.log(myFather.fullName())
console.log(myMother.fullName())
console.log(myFather.ageView())
console.log(myMother.ageView())

//adding new methods or properties is difficult to do
//so we need concept of prototype

Person.prototype.nationality = "Indian";

console.log(myFather.nationality)

