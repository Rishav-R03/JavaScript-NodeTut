/**
 * Objects can be changed, added, deleted and some are read-only
 * 
 */

const person = {
    firstName: "Rishav",
    lastNameL : "Raj",
    age : 21
};
//adding properties
person.nationality = "indian";
//accessing elements

// let age = person.age;
// let age = person["age"];
// let age = person[x];

//deleting properties
delete person.age;
console.log(person.firstName +" " + "is" + " " + person["age"] + " years old");
console.log(person.nationality);

myObject = {
    name: "Rishav",
    age: 21,
    myCars: {
        car1: "BMW",
        car2: "Mercedes",
        cars3: "Audi"
    }
}

myObject.myCars.car1;
// or
let carTwo = myObject["myCars"]["car2"];
console.log(carTwo);