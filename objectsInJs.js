//car is a object and it has attributes like name and color
/**
 * it has methods like drive(), stop() and start()
 * but these methods are performed at different times 
 * objects are mutable()
 */

const car = {type: "Fiat", model:"5000", color:"white"};
const person = {
    firstName: "Rishav",
    lastNameL : "Raj",
    age : 21
};

console.log(person.firstName);
//method 2

const students = new Object();

students.firstName = "Kriti";
students.lastName = "Rani";

const employee = {
    firstName : "Rishav",
    lastName : "Raj",
    age : 21,
    id: 3342,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}
